const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Durgaprasad Budhwani',
  authorAddress: 'durgaprasad.budhwani@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-s3-event-invalidate-cloudfront-cache',
  repositoryUrl: 'https://github.com/Durgaprasad-Budhwani/cdk-s3-event-invalidate-cloudfront-cache.git',

  deps: [], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['@types/aws-lambda@^8.10.111'], /* Build   dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  bundledDeps: ['aws-lambda@^1.0.7', '@aws-sdk/client-cloudfront@^3.279.0'], /* Dependencies that will be bundled into this module. */
  lambdaAutoDiscover: true,
});
project.synth();