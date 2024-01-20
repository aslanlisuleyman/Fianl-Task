const mongoose=require("mongoose")

const Table=mongoose.model("Table",new mongoose.Schema({
    image:String,
    name:String,
    price:Number
}))

module.exports=Table