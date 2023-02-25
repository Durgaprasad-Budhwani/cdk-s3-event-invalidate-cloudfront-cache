import { CloudFrontClient, ListDistributionsCommand, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';
import { S3Event } from 'aws-lambda';

export const handler = async (event: S3Event) => {
  const firstEvent = event?.Records?.[0]?.s3;
  const bucket = firstEvent?.bucket?.name;
  const key = firstEvent?.object?.key;
  console.log('Bucket: ' + bucket);
  console.log('Key: ' + key);

  const cloudFrontClient = new CloudFrontClient({ region: process.env.AWS_REGION });
  const listDistributionsCommand = new ListDistributionsCommand({});
  const data = await cloudFrontClient.send(listDistributionsCommand);
  console.log(data);
  const distributionLists = data.DistributionList?.Items?.filter((item) => {
    return item?.Origins?.Items?.filter((origin) => {
      return origin?.DomainName && origin?.DomainName?.indexOf(bucket) > -1;
    });
  });

  console.log(distributionLists);
  if (distributionLists?.length) {
    const cacheInvalidationCommandPromises = distributionLists.map((distribution) => {
      const params = {
        DistributionId: distribution?.Id,
        InvalidationBatch: {
          CallerReference: Date.now().toString(),
          Paths: {
            Quantity: 1,
            Items: [
              `/${key}`,
            ],
          },
        },
      };
      return cloudFrontClient.send(new CreateInvalidationCommand(params));
    });
    await Promise.all(cacheInvalidationCommandPromises);
  }
  return;
};