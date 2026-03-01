import mongoose from "mongoose";
const connectdb=async()=>{
    try{
        const connectioninstance=await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`\nmongodb connected!
            ${connectioninstance.connection.host}`);
    }catch(error){
        console.log("mongodb connection failed",error);
        process.exit(1)
    }
}
export default connectdb;