# testing-workshop

This project is for flexing testing skills around various situations. 

## Getting Started

If you are using NVM. Run a quick `nvm use` before continuing to make sure you are using node `10.14.0`

### Docker

1. CD into .local
2. Run `docker-compose up -d`
3. Should take a moment but once its up we are good to go.

If you have port binding issues go into the docker-compose.yml file and change the *left* port number to something else.
This will update the port you will use for the client. You can also bug someone about it during the workshop.

### Non Docker

Won't be as useful but just remove or comment out the redis cache function. We can't share instances for integration testing.

### Onward

1. CD into boundaries project.
2. Run `npm install`
3. Split your terminal
4. In one terminal run `npm test` to enter test watch mode.

## Whats included?

### Boundaries

This project is from taking a project that is already created and writing tests that confirm what it is doing. Some refactoring may be needed in order for all types of tests to work correctly.

### Stay tuned

Another project called greenlight will be added to do TDD first to build a lib.
