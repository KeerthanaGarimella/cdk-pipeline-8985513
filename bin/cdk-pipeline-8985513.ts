#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkPipeline8985513Stack } from '../lib/cdk-pipeline-8985513-stack';

const app = new cdk.App();

new CdkPipeline8985513Stack(app, 'CdkPipeline8985513Stack', {
  env: {
    account: process.env.AWS_ACCOUNT_ID || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.AWS_REGION || process.env.CDK_DEFAULT_REGION,
  },
});
