import config from "./src/config/index.js";
import server from "./src/sever.js";



server.listen(config.port,()=>{
    console.log(
        `Server listening in ${process.env.NODE_ENV} mode on port: ${config.port}`
       
    );
})