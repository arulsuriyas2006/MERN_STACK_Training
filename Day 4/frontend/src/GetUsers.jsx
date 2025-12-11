import React from 'react'
import axios from 'axios'
import {toast,ToastContainer} from "react-toastify";
import {useState,useEffect} from 'react'
const GetUsers = () => {

  
  const [studentDetails,setStudentDetails]= useState([]);
  

  const fetchStudentDetails = async ()=>{
    try{
     const res  = await axios.get('http://localhost:5000/api/getallstudents')
      await setStudentDetails(res.data.allStudentDetails);
      console.log(res.data.allStudentDetails)
      toast.success('fetch student details successfully')
    }catch(err){
       toast.error('error to fetch student details')
    }
  }
const deleteDetails = async(e)=>{
   console.log(e.target.value);
}
  useEffect(()=>{
    fetchStudentDetails();
  },[])
  return (
    <div className='student-Details-container'>
      <table className='table my-5'>
        <thead>
          <tr>
            <th className=' bg-success-subtle border border-success'> {" "}CreateDate</th>
            <th className=' bg-success-subtle border border-success'> {" "}Name</th>
            <th className=' bg-success-subtle border border-success'>Email</th>
            <th className=' bg-success-subtle border border-success'>Gender</th>
            <th className=' bg-success-subtle border border-success'>Phone</th>
            <th className=' bg-success-subtle border border-success'>Branch</th>
            <th className=' bg-success-subtle border border-success'>RollNo</th>
            <th className=' bg-success-subtle border border-success'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            studentDetails.length>0?(
            studentDetails.map((std,ind)=>(
               <tr key={ind}>
                <td className='border border-success'>{std.createdAt}</td>
                <td className='border border-success'>{std.name}</td>
                <td className='border border-success'>{std.email}</td>
                <td className='border border-success'>{std.gender}</td>
                <td className='border border-success'>{std.phone}</td>
                <td className='border border-success'>{std.branch}</td>
                <td className='border border-success'>{std.rollNo}</td>
                <td className='border border-success'>
                  <div className="btn btn-warning mx-2">Edit</div>
                <div className="btn btn-danger" value ={std._id} onClick={deleteDetails}>Delete</div></td>
              </tr>
            ))
          ):(
            <tr>
              <td className='text-center' colSpan="8">
                Student Details not found
              </td>
              </tr>
          )
          }
        </tbody>
      </table>
     <ToastContainer/>
    </div>
  )
}

export default GetUsers
