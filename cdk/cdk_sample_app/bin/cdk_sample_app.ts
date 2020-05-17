#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkSampleAppStack } from '../lib/cdk_sample_app-stack';

const app = new cdk.App();
new CdkSampleAppStack(app, 'CdkSampleAppStack');
