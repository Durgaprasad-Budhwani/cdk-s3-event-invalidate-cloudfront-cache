import { Duration } from 'aws-cdk-lib';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { S3EventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { S3cloudfrontInvalidationFunction } from './s3cloudfront-invalidation-function';

export interface S3EventInvalidateCloudFrontCacheProps {
  readonly bucketName: string;
}

export class S3EventInvalidateCloudFrontCache extends Construct {
  constructor(scope: Construct, id: string, props: S3EventInvalidateCloudFrontCacheProps) {
    super(scope, id);

    // get the existing bucket
    const bucketName = props.bucketName;
    const bucket = s3.Bucket.fromBucketName(this, `${id}-existing-s3-bucket`, bucketName);

    console.log('bucketName', bucketName);
    console.log('bucket', bucket);

    const s3CloudFrontCacheInvalidator = new S3cloudfrontInvalidationFunction(this, `${id}-cloudFront-cache-invalid`, {
      functionName: `${bucketName}-cloudFront-cache-invalid`,
      timeout: Duration.minutes(15),
    });

    s3CloudFrontCacheInvalidator.addToRolePolicy(new PolicyStatement({
      actions: [
        'cloudfront:GetDistribution',
        'cloudfront:GetDistributionConfig',
        'cloudfront:ListDistributions',
        'cloudfront:ListCloudFrontOriginAccessIdentities',
        'cloudfront:CreateInvalidation',
        'cloudfront:GetInvalidation',
        'cloudfront:ListInvalidations',
      ],
      resources: ['*'],
    }));

    // @ts-ignore
    s3CloudFrontCacheInvalidator.addEventSource(new S3EventSource(bucket, {
      events: [
        s3.EventType.OBJECT_CREATED,
        s3.EventType.OBJECT_REMOVED,
      ],
    }));
  }
}