# Acceptance Tests

Acceptance tests are tests that are severed from making a connection to the outside world.
This is where Sinon or nock should be used to make sure that you aren't connecting to Salesforce or redis.
With these types of tests you sacrifice the assurance of an external contracts and assume that they won't break that contract.

## Characteristics

- Commonly uses Sinon/Nock to replicate external resource calls and actions
- They can test from one side of an app (route level) and assert the result (response) stubbing/mocking external calls
- They are usually a little more narrow that integration tests. Meaning they test controllers and the logic the controllers would perform
  - IE) E-commerce checkout process, look up order (postgres stub) process card (stripe stub) save result (salesforce stub). Test: Ensure we passed the correct information to postgres stub, stripe stub, and salesforce stub

## Test Expectations

Your acceptance tests should cover the following:

1. The flow of controller logic
2. Any external clients and their logic for performing an action (cache)
