import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class CdkPipeline8985513Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myBucket = new s3.Bucket(this, 'MyFirstBucket8985513', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const myLambda = new lambda.Function(this, 'MyLambda8985513', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          console.log('Lambda triggered!');
          return { statusCode: 200, body: 'Hello from Lambda!' };
        }
      `),
      environment: {
        BUCKET_NAME: myBucket.bucketName,
      },
    });

    new dynamodb.Table(this, 'MyTable8985513', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      tableName: 'MyTable8985513',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    myBucket.grantReadWrite(myLambda);
  }
}