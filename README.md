# Serverless-app
Serverless Application 

## Prerequisites

Please follow following steps in order to get the project up and running.

1. Install node.js version 8.10 (AWS Lambda latest supported version)

       nvm install 8.10

2. Register and install Serverless framework globally

       npm install -g serverless
   
   https://serverless.com/framework/docs/providers/aws/guide/quick-start/
   
4. Install Dependencies

       npm install
      
5. Set up an AWS account to generate credentials for Serverless to access resources

   https://www.youtube.com/watch?v=HSd9uYj2LJA
   https://serverless.com/framework/docs/providers/aws/guide/credentials/
   
6. Configure Serverless to use AWS

       serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

   Keys will be stored in `~/.aws/credentials` in your machine
   
7. Install AWS CLI

       pip install awscli --upgrade --user
   
   https://docs.aws.amazon.com/cli/latest/userguide/installing.html
   
## Development

##### Test End-points Locally

In order to test and debug end-points on your local machine, run the following command on your terminal from the 
project directory and get URLs as displayed.

    sls offline start

##### Run Lint

    npm run lint

##### Run Spec Tests

    npm run test
    
**NOTE**: Keep below command running while you change any test, code as it will watch for 
any change and tests will be run automatically once you hit ctrl+s

    npm run test:watch
    
##### Run Test Coverage

    npm run coverage
    
##### Run Integration Tests - Offline

**NOTE**: When running integration tests on your local machine, keep running `serverless offline start` in one tab, and run the following command
in another one,

    npm run test:integration:offline
    
##### How To Write Integration Tests

https://scotch.io/tutorials/write-api-tests-with-postman-and-newman
https://www.getpostman.com/docs/v6/postman/collection_runs/command_line_integration_with_newman
    
## Deployment

In order to deploy everything to your staging environment in AWS run following command on your terminal from the
project directory. Once deployment finished it will output all the endpoint URLs on the terminal.

    serverless deploy -v
    
Note** : Use this method when you have updated your Function, Event or Resource configuration in serverless.yml 
and you want to deploy that change (or multiple changes at the same time) to AWS.

If you want to deploy only code changes related to a function, use below command, which is faster as it does not touch AWS CloudFormation Stack.

    serverless deploy function --function FunctionName
    
Fetch logs of a specific function

    serverless logs -f FunctionName -t (optionally tail the logs)


## Endpoints

| Method                                       |Description                              |
|----------------------------------------------|-----------------------------------------|
| POST /api/register                           | Create User                             |
| GET /api/qr-code                             | Get QR-Code                             |

#### Common Headers

All the requests should contain following headers.

| Key                | Value                                                               |               
|--------------------|---------------------------------------------------------------------|
|Content-Type        | application/json                                            |                                              
|Accept              | application/json                                            |                                                                

#### Common Errors

| Status code  | Value                                            |               
|--------------|--------------------------------------------------|
|400           | Bad Request                                      |                                             
|403           | Forbidden (incorrect stage, incorrect api key)   | 
|422           | Unprocessable Entity (validation errors )        |                                            
|500           | Internal server error                            | 


#### 1. User Register
A user can register giving email,

#### POST {url}/api/register

##### Request

```
   {
       "email":"example@email.com"
   }
```

##### Response

| Status code  | Value                                                               |               
|--------------|------------------------------|
|201           | Created                      | 

```
   {
       "userId": "<< SAMPLE USER ID HERE >>",
       "token": "<< SAMPLE TOKEN HERE >>"
   }
```

##### Error Response
   
 ```{
        "errors": [
            {
                "status": "400",
                "title": "Bad Request",
                "detail": "User email already register"
            }
        ]
    }   
 ```
 
 #### 2. Get QA-Code

#### GET {url}/api/qr-code

##### Response

| Status code  | Value                                                               |               
|--------------|------------------------------|
|200           | OK                           | 

```
  {
      "data": "<< SAMPLE DATA HERE >>"
  }
```

##### Error Response
   
 ```{
        "errors": [
            {
                "status": "404,
                "title": "Bad Request",
                "detail": "Insufficient detail to generate qr-code"
            }
        ]
    }   
 ```
 
