import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import {toast,ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import Nav from './Nav';
import axios from "axios";

const EditDetails = () => {
    const {id} = useParams();
    const [StudentDetails,setStudentDetails] =useState([])
    const navigate = useNavigate();
    console.log(id);
    const getstudent = async()=>{
        try{
        console.log("in getstduent method")
        const  res = await axios.get(`http://localhost:5000/api/getstudent/${id}`)
         console.log(res);
         console.log(res.data);
         console.log(res.data.userid)
        setStudentDetails(res.data.userid);
        // console.log(res.data.StudentDetails)
        }catch(err){
            toast.error("error in updated student")
        }
    }

    const handleEdit =async (e)=>{
        e.preventDefault();
        try{
          const res = await axios.put(`http://localhost:5000/api/updatestudent/${id}`,StudentDetails)
          toast.success("successfully updated")
          setTimeout(()=>{
            navigate('/getuser')
          },2000)
        }catch(err){
        toast.error("error to update details")
        }    
    }

    useEffect(()=>{
  getstudent();
    },[])
  return (
<div>
    <Nav/>
      <h1> Edit Student Details</h1>
      <form action="" onSubmit ={handleEdit}>
        <fieldset>
            <label htmlFor="">Name : </label>
            <input type ="text" placeholder="Enter your name" value ={StudentDetails.name} onChange ={(e)=>{
                setStudentDetails({...StudentDetails,name:e.target.value})
            }}required/><br/><br/>
            <label htmlFor="">Email : </label>
            <input type ="email" placeholder="Enter your email" value ={StudentDetails.email} onChange ={(e)=>{
                setStudentDetails({...StudentDetails,email:e.target.value})
            }}/><br/><br/>
            <label htmlFor="">Type : </label>
            <select value ={StudentDetails.type}onChange ={(e)=>{
                setStudentDetails({...StudentDetails,type:e.target.value})
            }}>
                <option value="">---Choose Type---</option>
                <option value="student">Student</option>
                <option value="staff">staff</option>
            </select><br></br><br></br>
            <label htmlFor="">Phone Number : </label>
            <input type ="tel" placeholder="+91"  value ={StudentDetails.phone} pattern="[5-9]{1}[0-9]{9}" onChange ={(e)=>{
                setStudentDetails({...StudentDetails,phone:e.target.value})
            }} required/><br/><br/>

            <label htmlFor="">Gender : </label>
            <input type ="radio" name ="gender"   value ="Male" onChange ={(e)=>{
                setStudentDetails({...StudentDetails,gender:e.target.value})
            }}/>Male<br/><br/>
            <input type ="radio"  name ="gender" value ="Female" onChange ={(e)=>{
                setStudentDetails({...StudentDetails,gender:e.target.value})
            }}/>Female<br/><br/>
            
            <label htmlFor="">Branch :</label>
            <select  value  ={StudentDetails.branch}onChange ={(e)=>{
                setStudentDetails({...StudentDetails,branch:e.target.value})
            }}>
                <option value="">---Choose Branch---</option>
                <option value="cse">CSE</option>
                <option value="ece">ECE</option>
                <option value="ailml">AIML</option>
                <option value="aids">AIDS</option>
                <option value="it">IT</option>
            </select><br></br><br></br>         

             <label htmlFor="">RollNo :</label>
             <input type="text"  value ={StudentDetails.rollNo} placeholder='23CSR...'onChange ={(e)=>{
                setStudentDetails({...StudentDetails,rollNo:e.target.value})
            }}required/>
              <button  type="submit" >Edit</button>
                <button  type="reset" onClick={()=>{navigate('/getuser')}}>Cancel</button>
         </fieldset>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default EditDetails
