#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkLib } from '../lib/index';



class CdkStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      new CdkLib(this, 'CdkLibApp');
    }
}

  const app = new cdk.App();
new CdkStack(app, 'CdkLibApp');