#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyIotStack } from '../lib/my_iot-stack';

const app = new cdk.App();
new MyIotStack(app, 'MyIotStack');
