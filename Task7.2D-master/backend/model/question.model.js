const mongoose = require("mongoose");

function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = currentDate.getDate().toString().padStart(2, '0');
  
    // Create the formatted date string in mm-dd-yyyy format
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }
  
  // Usage example:
  const dateString = getCurrentDate();
 

const questionSchema = mongoose.Schema({
    title:String,
    problem:String,
    tags:[String],
    date:{type:String,default:`${dateString}`}
},{
    versionKey:false
});


const QuestionModel = mongoose.model("question",questionSchema);

module.exports={
    QuestionModel
}