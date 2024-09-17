import mongoose from "mongoose";
const connectDataBase=async()=>{
    try{
        await mongoose.connect(process.env.dbURL)
console.log("connet correct")
    }catch(error){
        console.log(error)
    }
}