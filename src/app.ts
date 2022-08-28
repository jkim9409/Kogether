import express, {Request, Response, NextFunction, Application, ErrorRequestHandler} from "express";
import {Server} from 'http'
import createHttpError from "http-errors";

const PORT: Number = Number(process.env.PORT) || 3000;
const app: Application = express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello from ts app');
});


app.use((req: Request, res: Response, next: NextFunction) => {
    next();
});

const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) =>{
    res.status(err.status || 500)
    res.send({
        status: err.staus || 500,
        message: err.message
    })
};


app.use(errorHandler);


const server: Server = app.listen(PORT, ()=> console.log('Listening to port 3000'))