#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CloudouestdemoStack } from '../lib/cloudouestdemo-stack';

const app = new cdk.App();
new CloudouestdemoStack(app, 'CloudouestdemoStack', {
    env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region:process.env.CDK_DEFAULT_REGION
    }
})

