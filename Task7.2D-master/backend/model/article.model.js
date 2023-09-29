const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    title:String,
    image:String,
    abstract:String,
    problem:String,
    tags:[String],
},{
    versionKey:false
});


const ArticleModel = mongoose.model("article",articleSchema);

module.exports={
    ArticleModel
}