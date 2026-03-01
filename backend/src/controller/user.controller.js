import {user} from "../models/user.model.js";
const registeruser=async(req,res)=>{
    try{
        const{username,email,password}=req.body;
        if(!username || !email || !password){
            return res.status(400).json({message:"all fields are important!"})
        }
        const existing=await user.findOne({email:email.toLowerCase()});
        if(existing){
            return res.status(400).json({message:"user already exists!"});
        }
        const user1=await user.create({
            username,
            email:email.toLowerCase(),
            password
        });
        res.status(201).json({
                message:"user registered",
                user1:{id:user1._id,email:user1.email,username:user1.username}
        });
    }catch(error){
        res.status(500).json({message:"internal server error",error:error.message});
    }
};
const loginuser=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user1=await user.findOne({
            email:email.toLowerCase()
        });
        if(!user1) return res.status(400).json({
            message:"user not found"
        });
        const ismatch=await user1.comparePassword(password);
        if(!ismatch) return res.status(400).json({
            message:"invalid credentials"
        })
        res.status(200).json({
            message:"user logged in",
            user1:{
                id:user1._id,
                email:user1.email,
                username:user1.username
            }
        })
    }catch(error){
        res.status(500).json({
            message:"internal server error"
        })
    }
};
const logoutuser=async(req,res)=>{
        try{
            const{email}=req.body;
            const user1=await user.findOne({
                email
            });
            if(!user1) return res.status(404).json({
                message:"user not found"
            });
            res.status(200).json({
                message:"logout succesful"
            });
        }catch(error){
            res.status(500).json({
                message:"internal server error",error
            });
        }
};
export{
    registeruser,
    loginuser,
    logoutuser
};