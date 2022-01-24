import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import config from './config/index.js';
import routes from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

const server = express();

server.use(express.json());

if(config.nodeEnv==='development'){
    server.use(morgan('dev'));
}

server.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','content-type, authorization');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, HEAD');

    return next();
})

server.get(config.api.prefix, (req, res)=>{
    res.send('API is running...');
})

//Middlewares 
server.use(notFound);
server.use(errorHandler);

//routes 
server.use(config.api.prefix,routes);


export default server;