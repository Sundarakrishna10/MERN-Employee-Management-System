import userModel from './models/userModel.js'
import bcrypt from 'bcrypt'
import connectDataBase from './db/db.js'
const userRegister=async ()=>{
   connectDataBase()
    try{
        const hadhPassword =await bcrypt.hash("admin",10)
        const newUser=new userModel({
            name:"Admin",
            email:"admin@gmail.com",
            password:hadhPassword,
            role:"admin"
        })
        await newUser.save()
    }catch(error){
        console.log(error)
    }

}
userRegister();