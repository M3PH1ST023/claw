# Claw-Suite

## Prerequisite

-   claw-suite
-   dotenv

## Installation

If you already have dotenv installed

```
npm i claw-suite
```

else

```
npm i claw-suite dotenv
```

## Recommended File Structure

```
- index.js (your main js file)
- tests
    -- tc1.test.js (anyfile with extension as .test.js)
    -- tc2.test.js
    -- testFolder (embedded folders also works)
        --- tc3.test.js ...
- schema
    -- SampleSchema.js (schema check for api if needed)
- .env (for environment variables storage)
- node_modules
- package.json
- package-lock.json
```

## Usage

Its is very simple to use and the configuration is not much complex as you think

Inside the main file we can import claw-suite

> .env (environment variables)

```
BASE_URL="http://localhost:5000"
AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
```

> index.js (any main files names)

```
import claw from "claw-suite";
import dotenv from "dotenv";

dotenv.config();

claw.config("./tests");
// ./tests indicates the testcase file path if you have any other names give it as parameter
```

> test files (inside tests folders \*.test.js)

```
import claw, { validate } from "claw-suite";

claw.scratch("test case name", "test case description", async () => {
    let resp = await claw.get({ endpoint: "/get" });
    return validate.ok.isEqual(resp, "get response");
});

// if returned true logged in green in terminal
// if validation fails logged as red in terminal
```

> Schema file

```
Under dev ...
```

## Request Functionalities

For most of the functionalites we have autofilled parameters like baseUrl and auth token since it is configured in <span style="color:limegreen;font-weight:bold;">.env</span> file.

| Functionality | Syntax                                           | Return                   |
| ------------- | ------------------------------------------------ | ------------------------ |
| POST          | claw.post( {baseUrl, endpoint, body } )          | {response, responseData} |
| GET           | claw.get( {baseUrl, endpoint } )                 | {response, responseData} |
| GET by id     | claw.getById( {baseUrl, endpoint, id } )         | {response, responseData} |
| GET by query  | claw.getByQuery( {baseUrl, endpoint, query } )   | {response, responseData} |
| GET by params | claw.getByParams( {baseUrl, endpoint, params } ) | {response, responseData} |
| PUT           | claw.put( {baseUrl, endpoint, id, body } )       | {response, responseData} |
| PATCH         | claw.patch( {baseUrl, endpoint, id, body } )     | {response, responseData} |
| DELETE        | claw.delete( {baseUrl, endpoint } )              | {response, responseData} |
| DELETE by id  | claw.deleteById( {baseUrl, endpoint, id } )      | {response, responseData} |

## Validation Functionalities

Validation initially checks the status of response like (200 - OK, 404 - NotFound, etc .,)

| Functionality       | Syntax                                                                | Return                                                                             |
| ------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| is equal            | validate.ok.isEqual(actualResponse, expectedResponse)                 | <span style="color:limegreen;">true</span> / <span style="color:red;">false</span> |
| json equality check | validate.ok.jsonCheck(actualResponse, expectedResponse)               | <span style="color:limegreen;">true</span> / <span style="color:red;">false</span> |
| json schema check   | validate.ok.jsonSchemaCheck(actualResponse, expectedResponse, schema) | <span style="color:limegreen;">true</span> / <span style="color:red;">false</span> |
