REST API for Todo application
=============================

## Create a new typescript project
First of all we create a project skeleton which support typescript

### Project basics
1. Create a new nodejs project  
    `npm init`
1. Install typescript package  
    `npm install typescript --save-dev`
1. Create default typescript config  
    `npx tsc --init --sourceMap --outDir dist`
    Add the following line before `compileOption` section in tsconfig.js file
    `"exclude": ["**/*.test.ts"],`
1. Compile project and run it
    `npx tsc`
    `node dist/index.js`
1. Add some usefule command to package.json `scripts` section
    ``` json
        "build": "npx tsc",
        "start": "npm run build && node dist/index.js",
    ```
1. Add Jest unit testing framework and generate default Jest config file
    `npm i -D jest ts-jest @types/jest`
    `npx ts-jest config:init`
1. Add some unit test, create `index.test.ts` file into `src` folder with following content
    ``` js
    import { Greeter } from "./index";

    describe('first test', ()=>{
        it("should mock class B", () => {
            const g = new Greeter('Test');
            const result = g.greet();
            expect(result).toEqual('Hello, Test');
        });
    })
    ```
1. Replace test command in package.json file
    `"test": "jest"`
1. Run unit test
    `npm run test`
