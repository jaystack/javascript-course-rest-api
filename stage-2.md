REST API for Todo application
=============================

## Add express server to project
Create an express server

### Create an express server
1. Install express package  
    `npm i express`  
    `npm i @types/express --save-dev`
1. implement express server, change index.ts file content to this:
    ``` js
        import express, {Express, Request, Response, NextFunction} from 'express';

        const app: Express = express();
        const port: number = 3000;

        app.get('/', (req: Request, res: Response) => {
            res.send('Express + TypeScript Server');
        });

        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        });
    ```
1. Build and running new web server  
    `npm run build`  
    `npm start`  
    Open in browser the http://localhost:3000 URL
1. Implement a `POST` reqest, add following code snippet into express server
    ``` js
        app.post('/', (req: Request, res: Response) => {
            console.log(req.headers['content-type']);
            console.log(req.body)
            res.statusCode=201;
            res.send();
        });
    ```
1. Install `REST Client` package in VSCode, [REST Client docs](https://github.com/Huachao/vscode-restclient/blob/master/README.md)
1. Create `test/get.http` file for a `GET` reqest
    ```
        GET http://localhost:3000?p1=test&p2=almafa
    ```
1. Create a `test/post.http` file for a `POST` request
    ```
        POST http://localhost:3000
        Content-Type: application/json

        {
            "test":"apple"
        }
    ```
1. Try the `test/get.http` and `test/post.http` reqests
1. Add the body-parser middlewares to the express server, after that we can handle `text` and `json` content type in `POST` requests
    ``` js
        app.use(express.text());
        app.use(express.json());
    ```
1. If necessary you can create an own middleware, the middleware is running every time when request hit the express server.
    ``` js
        app.use((req:Request, res:Response, next:NextFunction)=>{
            console.log('=> request type:', req.method);
            next();
        });
    ```
