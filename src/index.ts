import express, {Express, Request, Response, NextFunction} from 'express';

const app: Express = express();
const port: number = 3000;

app.use(express.text());
app.use(express.json());

app.use((req:Request, res:Response, next:NextFunction)=>{
  console.log('=> request type:', req.method);
  next();
});

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.post('/', (req: Request, res: Response) => {
  console.log(req.headers['content-type']);
  console.log(req.body)
  res.statusCode=201;
  res.send();
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});