import {post} from "../models/post.model.js";
const createpost=async(req,res)=>{
    try{
        const{name,description,age}=req.body;
        if(!name || !description || !age){
            return res.status(400).json({
                message:"all field required"
            });
        }
        const post1=await post.create({name,description,age});
            res.status(201).json({
                message:"post created successfully",post1
            });
    }catch(error){
        res.status(500).json({
            message:"internal server error",error
        });
    }
}
const getposts=async(req,res)=>{
    try{
        const posts=await post.find();
        res.status(200).json(posts);
    }catch(error){
        res.status(500).json({
            message:"internal server error",error
        });
    }
}
const updatepost=async(req,res)=>{
    try{
        if(Object.keys(req.body).length===0){
            return res.status(400).json({
                message:"no datat provided for update"
            });
        }
        const post1=await post.findByIdAndUpdate(req.params.id,req.body,
            {new:true}
        );
        if(!post1) return res.status(404).json({
            message:"post not found"
        });
        res.status(200).json({
            message:"post updated successfully",post1
        });
    }catch(error){
        res.status(500).json({
            message:"internal server error",error
        });
    }
}
const delpost=async(req,res)=>{
    try{
        const post1=await post.findByIdAndDelete(req.params.id);
        if(!post1) return res.status(404).json({
            message:"post not found"
        });
        res.status(200).json({
            message:"post successfully deleted",post1
        });
    }catch(error){
        res.status(500).json({
            message:"internal server error",error
        });
    }
}
export{
    createpost,
    getposts,
    updatepost,
    delpost
};