import React, { useState } from 'react'
// import "./styles/register.css"
import {toast,ToastContainer} from "react-toastify";
const AddUser = () => {
    const [StudentDetails,setStudentDetails]=useState({
        name:"",
        email:"",
        type:"",
        phone:"",
        gender:"",
        branch:"",
        rollNo:""
    })


    const handleChange =(e)=>{
        setStudentDetails({...StudentDetails,[e.target.name]:e.target.value})
    }
    const handleSubmit = async()=>{
       
       try{
        e.preventDefault();
       const res = await axios.post('http://localhost:5000/api/addstudent',StudentDetails)
       console.oog(StudentDetails);
       toast.success(res.data.message)
       setStudentDetails({
        name:"",
        email:"",
        type:"",
        phone:"",
        gender:"",
        branch:"",
        rollNo:""
       })
       }catch(err){
       toast.error("error to add student")
       }
    }

  return (
    <div>
      <h1> Add Student Details</h1>
      <form action="" onSubmit ={handleSubmit}>
        <fieldset>
            <label htmlFor="">Name : </label>
            <input type ="text" placeholder="Enter your name" value ={StudentDetails.name}name="name" onChange ={handleChange}required/><br/><br/>
            <label htmlFor="">Email : </label>
            <input type ="email" placeholder="Enter your email" value ={StudentDetails.email} name= "email" onChange ={handleChange}required/><br/><br/>
            <label htmlFor="">Type : </label>
            <select name="type" value ={StudentDetails.type}onChange={handleChange}>
                <option value="">---Choose Type---</option>
                <option value="student">Student</option>
                <option value="staff">staff</option>
            </select><br></br><br></br>
            <label htmlFor="">Phone Number : </label>
            <input type ="tel" placeholder="+91" name ="phone" value ={StudentDetails.phone} pattern="[5-9]{1}[0-9]{9}" onChange={handleChange} required/><br/><br/>

            <label htmlFor="">Gender : </label>
            <input type ="radio" name ="gender"   value ={StudentDetails.gender}onChange={handleChange}/>Male<br/><br/>
            <input type ="radio"  name ="gender" value ={StudentDetails.gender} onChange={handleChange}/>Female<br/><br/>
            
            <label htmlFor="">Branch :</label>
            <select name="branch" value  ={StudentDetails.branch}onChange={handleChange}>
                <option value="">---Choose Branch---</option>
                <option value="cse">CSE</option>
                <option value="ece">ECE</option>
                <option value="ailml">AIML</option>
                <option value="aids">AIDS</option>
                <option value="it">IT</option>
            </select><br></br><br></br>         

             <label htmlFor="">RollNo :</label>
             <input type="text" name ="rollNo" value ={StudentDetails.rollNo} placeholder='23CSR...'onChange={handleChange}required/>
              <button className="btn btn-primary" type="submit" >Submit</button>
                <button className="btn btn-warning" type="reset" >Cancel</button>
         </fieldset>
      </form>
      <ToastContainer/>
    </div>
  )
}
export default AddUser
