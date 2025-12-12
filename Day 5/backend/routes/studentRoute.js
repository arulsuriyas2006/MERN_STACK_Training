const express = require('express')
const router =express.Router()
const {addStudent,getAllStudent,getStudentBasedId, deleteStudent,updateStudent} = require('../controller/studentController.js')

router.post("/addstudent",addStudent);
router.get("/getallstudents",getAllStudent);
router.get("/getstudent/:id",getStudentBasedId);
router.delete("/deletestudent/:id",deleteStudent);
router.put("/updatestudent/:id",updateStudent);



module.exports = router;