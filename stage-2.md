REST API for Todo application
=============================

## Add express server to project
Create an express server

### Create an express server
1. Install express package  
    `npm i express`  
    `npm i @types/express --save-dev`
1. Build and running new web server  
    `npm run build`  
    `npm run dev`  
    Open in browser the http://localhost:3000 URL
1. Install `REST Client` package in VSCode
1. Try the `test/get.http` and `test/post.http` reqests
1. Add middleware to the express server
    ``` js
        app.use(express.text());
        app.use(express.json());
    ```
1. Create own middleware, add following code snippet to index.ts file
    ``` js
        app.use((req:Request, res:Response, next:NextFunction)=>{
            console.log('=> ', req.method);
            next();
        });
    ```
