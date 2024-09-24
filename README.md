## npm init -y

    To Initilising the repo / create package.json

## npm i -D typescript jest ts-jest @types/jest ts-node

    Adding typescript , jest

## ts-node

    we added for node

## npx ts-jest config:init

    Adding jest config file.

## Creat jest.config.ts
----------------------------------------------------------
    import type { Config } from "@jest/types";
    const config:Config.InitialOptions={
    preset:'ts-jest',
    testEnvironment:'node',
    verbose:true
    }
    export default config;
---------------------------------------------------------

##

## Structure of a properly written unit test:
    AAA principles:
        -Arrange
        -Act
        -Assert
    Setup
    Teardown
## ------------------------------

