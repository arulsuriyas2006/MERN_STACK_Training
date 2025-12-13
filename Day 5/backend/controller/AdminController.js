// admin login token generation
const jwt = require('jsonwebtoken')

const login =async (req,res)=>{
   console.log("login")
   try{
   const reqAdminDetails = {
    username:req.body.username,
    password:req.body.password
   }
  const defaultValues ={
     username:"arul",
     password:"12345"
  }
 console.log("check")
  if(reqAdminDetails.username == defaultValues.username  && reqAdminDetails.password == defaultValues.password){
     console.log("match")
     const token = await jwt.sign(reqAdminDetails,process.env.SECURE_KEY,{
      notBefore:"10s",
      expiresIn:"5M"
     })
     console.log(token);
     res.status(200).json({token,message:"token generated Successfully"})
   }else{
     res.status(200).json({message:"username password mismatch"})

   }
  }catch(err){
   res.status(200).json({message:"failed to token generate"})
  }
}

const profile = async (req,res)=>{
   console.log("profile")
   try{
      const auth =await req.headers['authorization'];
      const token = auth.split(" ")[1];
      console.log(auth);
      const verified = jwt.verify(token,process.env.SECURE_KEY);
      res.status(200).json({verified,message:"Token Authenticated Successfully"})

   }catch(err){
      if(err instanceof jwt.TokenExpiredError){
         res.status(401).json({message:"Token expired"});
      }else if(err instanceof jwt.NotBeforeError){
        res.status(401).json({message:"Token not active"})
      }
   }
}

module.exports ={login,profile}