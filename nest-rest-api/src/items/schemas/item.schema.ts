import * as mongoose from "mongoose";

export const itemSchema=new mongoose.Schema({
    name:{ type:String,required:true},
    description:{ type:String,required:true},
    quantity:{ type:Number,required:false},
})