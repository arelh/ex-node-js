import mongoose from "mongoose"
import validator from "validator"


mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api",{
    useNewUrlParser:true,
   
})
const User=mongoose.model("User", {
    name:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error("email is invalid")
            }
        }
    },
    age:{
        type:Number,
        require:true,
        validate(value){
            if(value<0){
                throw new error("age  must be a postive number")
            }
        }
    }
})

const me= new User({
    name:"    arel   ",
    email:"arel@test.com     ",
    age:30
})

me.save().then(()=>{
    console.log(me);
}).catch((error)=>{
    console.log("error",error);
})

const myWife= new User({
    name:"    RON   ",
    email:"RON@test.com     ",
    age:30
})
myWife.save().then(()=>{
    console.log(myWife);
}).catch((error)=>{
    console.log("error",error);
})