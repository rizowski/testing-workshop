# Unit Tests

Unit tests are the foundation of testing. You should expect to spend most of your time writing these kinds of tests.
They test *all* of your business logic and should be the enforcers of your business logic.
Without them, but still including integration tests, you are still in a better spot than no tests.
But your business discussions as to why this application is doing these things is not tested. Only that you enter in a quarter and you got to play the game. Not how the game works.

How disappointing would that be if game developers for the old arcade games didn't test their gameplay and only the start action of receiving money and timeout or death sequences?

## Characteristics

- Lots of nitty gritty tests, almost a feeling of tediousness due to their nature
- Should expect to test most branches of the code.
  - `If statements` are considered branches. Anywhere the app may pivot or make a decision to satisfy a request should be covered by unit tests.

## Test Expectations

If you have correctly pulled apart pieces of this application you should expect tests around:

- lib/cache
- lib/stringify
- route validation
- request response mapping / Object transformation
- Error conditions around contracts

### Example

The easiest way to write any kind of tests, or in particular unit tests, is to walk through the function and write down a test for every part of the function.

```js
function addTwo(num1, num2){
  return num1 + num2;
}
```

Look at the function above and count how many test cases you can come up with.

You should have said there are 4 tests.

1. What happens when you pass in two numbers and what should the function do? (Happy Path)
  - it('should return a sum of the two numbers')
2. What happens when you pass in `num1` but not `num2` and what should the function do?
  - it('should throw an error?')
  - it('should return 0?')
3. What happens when you pass in `num2` but not `num1` and what should the function do?
  - it('should throw an error?')
  - it('should return 0?')
4. What happens when you pass in nothing and what should the function do? (Worst Case)
  - it('should throw an error?')
  - it('should return 0?')

Now say that the business decided that they wanted to make it so if the user only passes in the first number then it returns the first number. 
But if they only pass in the second number they want it to throw an error.

> Notice: This can be related to real life business requirements. Writing a test to ensure your code satisfies that requirement means less work for QA and less back and forth you have to do with PM's or other parties.

```js
function addTwo(num1, num2){
  if(num1 && !num2){
    return num1;
  }
  if(!num1 && num2){
    throw new Error('num1 is required');
  }

  return num1 + num2;
}
```

Now walk through the function and determine what the tests would be.

```js
it('should return num1 if num1 is only provided')
it('should throw an error if num2 is provided but num1 is not')
it('should sum two numbers together')
```
