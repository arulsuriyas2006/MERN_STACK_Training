const express = require('express')
const router =express.Router()
const {addStudent,getAllStudent,getStudentBasedId, deleteStudent} = require('../controller/studentController.js')

router.post("/addstudent",addStudent);
router.get("/getallstudents",getAllStudent);
router.get("/getstudent/:id",getStudentBasedId);
router.delete("/deletestudent/:id",deleteStudent);



module.exports = router;