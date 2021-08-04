
# The Guarantors API automation challenge

This repo contains my take on The Guarantors QA/API automation challenge.




## Pre-requirements

I assume you do, but just in case you dont, you need to have installed:

- NodeJS
- NPM
  
## Instructions

- Clone this repo
- To download dependencies, and opening a terminal on the root, you must run
    ```bash
      npm install
    ```
- To run the tests you should run

  ```bash
    npx mocha ./test/ --timeout 15000
    ```
*note:* I set a timeout for the tests to run because of some intermitent timeout errors I was having, if you think you dont need it, just remove it
## Tech Stack

- JavaScript
- Mocha
- PactumJS

if you ask why pactumJS...well, I had never used it, but since I just googled and found [this](https://dev.to/asaianudeep/api-testing-tools-in-javascript-22d8) I just decided to try.

  