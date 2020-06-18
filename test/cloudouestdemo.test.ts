import * as cdk from '@aws-cdk/core';
import * as Cloudouestdemo from '../lib/cloudouestdemo-stack';
import '@aws-cdk/assert/jest';

test('Check Ressources', () => {
  const app = new cdk.App();
  const stack = new Cloudouestdemo.CloudouestdemoStack(app, 'MyTestStack', {
    env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region:process.env.CDK_DEFAULT_REGION
    }
  });
  // Asstertions
  expect(stack).toHaveResource("AWS::EC2::SecurityGroup");
  expect(stack).toHaveResource( "AWS::ElasticLoadBalancingV2::LoadBalancer", {
    Scheme: 'internet-facing'});
});
