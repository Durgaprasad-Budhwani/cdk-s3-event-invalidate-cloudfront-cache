import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { S3EventInvalidateCloudFrontCache } from '../src';

describe('S3EventInvalidateCloudFrontCache', () => {
  // function createTestStack(makeProps: Function = () => ({})) {
  //   const app = new App();
  //   const stack = new Stack(app, 'TestStack');
  //   new S3EventInvalidateCloudFrontCache(stack, 'TestAudit', makeProps({ stack }));
  //   const assert = Template.fromStack(stack);
  //   return { stack, assert };
  // }

  it('Uses default s3 bucket if none provided', () => {
    const app = new App();
    const stack = new Stack(app, 'TestStack');
    new S3EventInvalidateCloudFrontCache(stack, 'TestAudit', { bucketName: 'test-bucket' });
    const assert = Template.fromStack(stack);
    assert.resourceCountIs('AWS::Lambda::Function', 2);
  });
});