import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import {toast,ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import Nav from './Nav';

const EditDetails = () => {
    const {id} = useParams();
    const [StudentDetails,setStudentDetails] =useState([])
    const navigate = useNavigate();
    console.log(id);
    const getstudent = async()=>{
        try{
        console.log("in getsyduent method")
        const  res = await axios.get(`http://localhost:5000/api/getstudent/${id}`)
        console.log(res);
        setStudentDetails(res.data.StudentDetails);
        toast.success("successfully updated")
        console.log(res.data.StudentDetails)
        setTimeout(()=>{
            navigate('/getuser')
        },1000)
        }catch(err){
            toast.error("error in updated student")
        }
    }

    const handleChange =(e)=>{
        setStudentDetails({...StudentDetails,[e.target.name]:e.target.value})

    }
    const handleEdit =async ()=>{
        try{
          const res = await axios.put(`http://localhost:5000/api/updatestudent/${id}`,studentDetails)
          toast.success("successfully updated")
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
            <input type ="text" placeholder="Enter your name" value ={StudentDetails.name} onChange ={()=>{
                setStudentDetails({...StudentDetails,name:e.target.value})
            }}required/><br/><br/>
            <label htmlFor="">Email : </label>
            <input type ="email" placeholder="Enter your email" value ={StudentDetails.email} onChange ={()=>{
                setStudentDetails({...StudentDetails,email:e.target.value})
            }}/><br/><br/>
            <label htmlFor="">Type : </label>
            <select value ={StudentDetails.type}onChange ={()=>{
                setStudentDetails({...StudentDetails,type:e.target.value})
            }}>
                <option value="">---Choose Type---</option>
                <option value="student">Student</option>
                <option value="staff">staff</option>
            </select><br></br><br></br>
            <label htmlFor="">Phone Number : </label>
            <input type ="tel" placeholder="+91"  value ={StudentDetails.phone} pattern="[5-9]{1}[0-9]{9}" onChange ={()=>{
                setStudentDetails({...StudentDetails,phone:e.target.value})
            }} required/><br/><br/>

            <label htmlFor="">Gender : </label>
            <input type ="radio" name ="gender"   value ={StudentDetails.gender}onChange={handleChange}/>Male<br/><br/>
            <input type ="radio"  name ="gender" value ={StudentDetails.gender} onChange={handleChange}/>Female<br/><br/>
            
            <label htmlFor="">Branch :</label>
            <select  value  ={StudentDetails.branch}onChange ={()=>{
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
             <input type="text"  value ={StudentDetails.rollNo} placeholder='23CSR...'onChange ={()=>{
                setStudentDetails({...StudentDetails,rollNo:e.target.value})
            }}required/>
              <button className="btn btn-primary" type="submit" >Edit</button>
                <button className="btn btn-warning" type="reset" onClick={()=>{navigate('/getuser')}}>Cancel</button>
         </fieldset>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default EditDetails
