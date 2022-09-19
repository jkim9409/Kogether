import express, {Request, Response, NextFunction, Application, ErrorRequestHandler} from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from 'type-graphql';
import { ApolloServer} from 'apollo-server-express';
import createHttpError from "http-errors";
import { UserResolver } from './graphql/user'
import "reflect-metadata";

async function createApolloServer(port: number) {
    const app = express()
  
    const schema = await buildSchema({ resolvers: [UserResolver] }) // 스키마로 변환!
    const server = new ApolloServer({ schema })
  
    await server.start()
    server.applyMiddleware({ app })
  
    await new Promise<void>((resolve) => app.listen(port, resolve))
    console.log(`Server running on :${port}`)
  
    return { server, app }

  }

  createApolloServer(3000);


// const PORT: Number = Number(process.env.PORT) || 3000;
// const app: Application = express()

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('hello from ts app');
// });

// app.use((req: Request, res: Response, next: NextFunction) => {
//     next();
// });

// const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) =>{
//     res.status(err.status || 500)
//     res.send({
//         status: err.staus || 500,
//         message: err.message
//     })
// };


// app.use(errorHandler);

// const server: Server = app.listen(PORT, ()=> console.log('Listening to port 3000'))

