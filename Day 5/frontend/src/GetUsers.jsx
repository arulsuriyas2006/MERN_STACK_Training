import React from 'react'
import axios from 'axios'
import {toast,ToastContainer} from "react-toastify";
import {useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import Nav from './Nav';
const GetUsers = () => {

  
  const [studentDetails,setStudentDetails]= useState([]);
  const navigate = useNavigate();

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
const deleteDetails = async(id)=>{
  try{
  const res = await axios.delete(`http://localhost:5000/api/deletestudent/${id}`)
   console.log(id);
   console.log(res.data)
   fetchStudentDetails();
   toast.success("successfully deleted")
  }catch(err){
    console.log(err)
    toast.error(err);
  }
}

const EditDetails = async(id)=>{
  navigate(`/editstudent/:${id}`)
}
  useEffect(()=>{
    fetchStudentDetails();
  },[])
  return (
    <div className='student-Details-container'>
      <Nav/>
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
                  <button className="btn btn-warning mx-2"  onClick={()=>EditDetails(std._id)}>Edit</button>
                <button className="btn btn-danger"  onClick={()=>deleteDetails(std._id)}>Delete</button></td>
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
