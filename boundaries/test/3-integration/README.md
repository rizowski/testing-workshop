# Integration Tests

Integration tests are the least stable and the easiest tests of all the tests. 
These types of tests are what would replace Postman tests. However, these will break the most if your business logic, or contracts change. 
These should be the lowest priority of tests to write even though they may be the easiest. 
Because of their fragility these types of tests could create a lot of churn for a developer to keep maintained.

## Characteristics:

- These tests should not include any stubbing if you control the domain.
  - Stubbing calls to salesforce or other third parties may make sense depending on API control
- They usually start at one end of the app (route level) and test the results when called (http response)
- They do not test what decisions a controller would make when called. Instead test validation, queries, response structures and error types

## Test Expectations

From the api route interface all routes should be tested using Hapijs [inject method](https://hapijs.com/api#-await-serverinjectoptions).

Your integration tests should cover the following:

- HTTP Methods available
- Schema validation
- If the route is to error, what it looks like in terms of the response as well as the statusCode it returns is appropriate
- The contract that the route returns is consistent and predictable
  - No objects and array types. Always an object or always an array
