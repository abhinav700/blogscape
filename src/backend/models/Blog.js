const mongoose=require('mongoose');
const {Schema}=mongoose;

const blogsSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    
    title:{ 
        type:String,
        required:true,
    },
    
    content:{
        type:String,
        required:true,
       
    },
    category:{
        type:String,
        default:"general"
    },
    date:{
        type:Date,
        default:Date.now
    },
//     image:{
//         type:
//     }
 })
module.exports=mongoose.model('blogs',blogsSchema);