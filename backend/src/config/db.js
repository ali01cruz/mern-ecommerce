import mongoose from 'mongoose'
import config from './index.js';
/* 
const user = 'ali01cruz';
const password = 'admin';
const dbname='datos'
const uri=`mongodb+srv://ali01cruz:${password}@cluster0.tzlr2.mongodb.net/${dbname}retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(()=>console.log('Base de datos conectada'))
    .catch(e=>console.log(e))
 */

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(config.databaseURL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

export default connectDB;