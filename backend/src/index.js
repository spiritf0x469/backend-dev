import dotenv from "dotenv";
import connectdb from "./config/database.js";
import app from "./app.js";
dotenv.config({
    path:'./.env'
});
const startserver=async()=>{
    try{
        await connectdb();
        app.on("error",(error)=>{
            console.log("error",error);
            throw error;
        });
        const port=process.env.PORT || 8000;
        app.listen(port,()=>{
            console.log(`server is running on port:${port}`);
        })
    }catch(error){
        console.log("mongodb connection failed!",error);
    }
}
startserver();