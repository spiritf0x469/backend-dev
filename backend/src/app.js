import express from "express"
const app=express() //create an express app
app.use(express.json());
import userrouter from './routes/user.route.js'
import postrouter from './routes/post.route.js';
app.use("/api/v1/users",userrouter);
app.use("/api/v1/posts",postrouter);
//eample route:http://localhost:4000/api/v1/users/register
export default app;