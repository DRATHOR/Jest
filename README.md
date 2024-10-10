## To Initilising the repo / create package.json
npm init -y
## Adding typescript , jest
npm i -D typescript jest ts-jest @types/jest ts-node
## we added for node
ts-node
## Adding jest config file.
npx ts-jest config:init
## Creat jest.config.ts
    import type { Config } from "@jest/types";
    const config:Config.InitialOptions={
    preset:'ts-jest',
    testEnvironment:'node',
    verbose:true
    }
    export default config;
## Structure of a properly written unit test:
    AAA principles:
        -Arrange
        -Act
        -Assert
    Setup
    Teardown
<details>
<summary>used languages</summary>

| Rank | Languages |
|-----:|-----------|
|     1| JavaScript|
|     2| React   |
|     3| jest      |

</details>
