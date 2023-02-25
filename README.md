# CDK project for creating S3 bucket triggers and invalidating CloudFront cache

When you have a website or application that uses Amazon CloudFront as a content delivery network (CDN) and Amazon S3 to
store your images, you may want to ensure that whenever an image is updated or changed in the S3 bucket, the
corresponding image in the CloudFront cache is invalidated.

One way to achieve this is by using an AWS Lambda function that listens to changes in the S3 bucket, and then sends a
request to the CloudFront API to invalidate the cache for the corresponding image.

To make sure that only the changed image is invalidated, you can use the S3 object key as a unique identifier, and pass
it to the CloudFront invalidation API. This way, CloudFront knows exactly which object to invalidate in its cache, and
will not accidentally invalidate other objects that have not been changed.

By invalidating the CloudFront cache for changed images in the S3 bucket, you can ensure that your users are always
served the most up-to-date version of your images, without having to wait for CloudFront to expire the cached version.
This can help improve the performance and user experience of your website or application.

## About **s3-event-invalidate-cloudfront-cache**

This is a CDK project that creates a AWS Lambda function that listens to changes in an S3 bucket,
and invalidates the corresponding objects in a CloudFront distribution cache.

## Installation

```bash
yarn add cdk-s3-event-invalidate-cloudfront-cache
```

Or

```bash
npm install cdk-s3-event-invalidate-cloudfront-cache
```

## Usage

### Import the package

```typescript
import {S3EventInvalidateCloudFrontCache} from 'cdk-s3-event-invalidate-cloudfront-cache';
```

### Create a new S3EventInvalidateCloudFrontCache construct

```typescript
    new S3EventInvalidateCloudFrontCache(this, "S3EventInvalidateCloudFrontCache", {
  bucketName: bucket.bucketName,
})
```

`bucketName` is the name of the S3 bucket that you want to listen to changes for, and it will invalidate the
corresponding objects in the CloudFront distribution cache.

### Language Supported

This project includes support for various programming languages and AWS services, including TypeScript, JavaScript, Python, Java, C#, and more. It also includes built-in support for popular AWS services such as AWS Lambda, AWS CloudFormation, AWS CloudFront, AWS S3, AWS API Gateway, and more.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.