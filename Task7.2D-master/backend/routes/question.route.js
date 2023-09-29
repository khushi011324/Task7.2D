const express = require("express");
const mongoose = require("mongoose");
const { ArticleModel } = require("../model/article.model");
const { QuestionModel } = require("../model/question.model");
const questionRouter = express.Router();

questionRouter.post("/add",async(req,res)=>{
    const payload = req.body;
    
    if(payload){
        const data = await new QuestionModel(payload);
        data.save();
        res.status(200).send({"msg":"Question uploaded successfully"}) 
    }else{
        res.status(400).send({"msg":"Question did not uploaded"})
    }
})

questionRouter.get("/alldata",async(req,res)=>{
    const data = await QuestionModel.find();
   // console.log(data)
    res.status(200).send({"msg":data})

})

questionRouter.delete("/deletequestion/:_id",async(req,res)=>{
    const {_id}=req.params
    console.log(_id)
    
    try {
       await QuestionModel.findByIdAndDelete({_id});
        res.status(200).send({"msg":"Question Deleted"})
    } catch (error) {
        console.log(error)
        res.status(400).send({"msg":"Unable to delete Qusetion"})
    }
})

questionRouter.get("/title",async(req,res)=>{
   const {s} = req.query;
      
   try {
    let data = await QuestionModel.find({title:s})
   console.log(data)
   res.send(data)
   } catch (error) {
    res.send(error)
   }
})

questionRouter.get("/date",async(req,res)=>{
    const {s} = req.query;
     //  console.log("date",s)
    try {
     let data = await QuestionModel.find({date:`${s}`})
   // console.log(data)
    res.send(data)
    } catch (error) {
     res.send(error)
    }
 })

 questionRouter.get("/tags",async(req,res)=>{
    const {s} = req.query;
       
    try {
     let data = await QuestionModel.find({tags:s})
   console.log(data)
    res.send(data)
    } catch (error) {
     res.send(error)
    }
 })

module.exports={
    questionRouter
}