// admin login token generation
const token = require('jwt')
const env = require("dotenv")
const cors = require('cors')
env.config();
const login =(req,res)=>{
   reqAdminDetails = {
    username:req.body.username,
    password:req.body.password
   }
  const defaultValues ={
     username:"admin@kec.in",
     password:"admin@123"
  }

  if(reqAdminDetails.username == defaultValues.username  && eqAdminDetails.password == defaultValues.password){
     token.sign(defaultValues,process.env.SECURE_KEY)
  }
}