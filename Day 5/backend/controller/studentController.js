const student = require('../model/studentmodel.js')

const addStudent = async (req,res)=>{
    console.log("add student")
    try{
   const newStudent ={
        name:req.body.name,
        email:req.body.email,
        type:req.body.type,
        phone:req.body.phone,
        gender:req.body.gender,
        branch:req.body.branch,
        rollNo:req.body.rollNo
   }
    console.log("add1 student")
   const std = new student(newStudent);
   await std.save();
  console.log("add2 student")

   res.status(201).json({message:"student add successfully"},std)
}catch(err){
    res.status(500).json({message:"student does not add check the server",err})
}
}


const getAllStudent = async(req,res)=>{
    try{
   const  allStudentDetails = await student.find();
   res.status(200).json({allStudentDetails})
    }catch(err){
     res.status(500).json({message:"unable to get student details check the server",err})
    }
}

const getStudentBasedId = async(req,res)=>{
    console.log("get student function");
     try{
       const userid =await student.findById(req.params.id);
       console.log(userid);
       if(!userid){
        res.status(404).json({message:"user not found"});
       }
       res.status(200).json({userid});
     }catch(err){
       res.status(500).json({message:"error to fetch users",err})     
    }
}


const deleteStudent = async (req,res)=>{
  try{
     const deleteUser = await student.findByIdAndDelete(req.params.id);
     if(!deleteUser){
        res.status(404).json({message:"user not found"});
     }
     res.status(200).json({message:"user deleted successfully",deleteUser});
    }catch(err){
        res.status(500).json({message:"error to delete user",err})
    }
} 

const updateStudent = async (req,res)=>{
    try{
     const updatedStudent = await student.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        email:req.body.email,
        type:req.body.type,
        phone:req.body.phone,
        gender:req.body.gender,
        branch:req.body.branch,
        rollNo:req.body.rollNo
     },
     {new:true}
    );
    if(!updatedStudent){
        res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"updated successfully"},updatedStudent);
    }catch(err){
     res.status(500).json({message:"error to update"});
    }
}

module.exports ={addStudent,getAllStudent,getStudentBasedId,deleteStudent,updateStudent};