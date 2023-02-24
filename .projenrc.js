const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'user',
  authorAddress: 'user@domain.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'aws-cdk-s3-cloud-cache-invalidation',
  repositoryUrl: 'https://github.com/Durgaprasad-Budhwani/aws-cdk-s3-cloud-cache-invalidation.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();