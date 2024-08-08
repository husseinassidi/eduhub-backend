import { text } from "express";
import mongoose from "mongoose";


const filesSchema = new mongoose.Schema({

    
        fileName:{
            type:String,
            required:true
        },
        ext:{
            type:String,
            required:true,
            enum:["pdf"],
            default:"pdf"
        },
        path:{
            type:String,
            required:true
        },
  
        class:{

            type: mongoose.Schema.Types.ObjectId,
            ref:'Class',
            required:true,
        },
        instructor:{

            type: mongoose.Schema.Types.ObjectId,
            required:true,
        }
        
        

    
}, { timestamps: true });


export default mongoose.model('files',filesSchema)