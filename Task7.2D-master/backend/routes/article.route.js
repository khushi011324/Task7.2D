const express = require("express");
const mongoose = require("mongoose");
const { ArticleModel } = require("../model/article.model");
const multer = require("multer");
const path = require("path");
const articleRouter = express.Router();



const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "public/Images")
    },
    filename: (req,file,cb)=>{
        cb(null , file.fieldname + "-" + Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({
    storage:storage
})

articleRouter.post("/add", upload.single("file"),async(req,res)=>{
    const {title,abstract,problem,tags} = req.body;
    //console.log(req.file)

    try {
        const image =  req.file.filename;
        //console.log("payload",payload)
        console.log("image",image)
        const payload = {title,abstract,problem,tags:tags.split(" "),image}
         if(title){
              await ArticleModel.create(payload);
            //  console.log(data,"data")
            //  data.save();
             res.status(200).send({"msg":"Article uploaded successfully"}) 
         }
        
    } catch (error) {
        res.send({"msg":error})
    }
  
})





module.exports={
    articleRouter
}