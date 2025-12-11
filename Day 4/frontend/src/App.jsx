import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Register from './Register'
import AddUser from './AddUser'
import GetUsers from './GetUsers'
import Contact from './Contact'
import Home from './Home'
import Nav from './Nav'
import About from './About'
import "./styles/nav.css"


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Nav/>
       <Routes>
         <Route path="/" element ={<Home/>}/>
         {/* <Route path="/register" element ={<Register/>}/> */}
         <Route path="/adduser" element ={<AddUser/>}/>
         <Route path="/getuser" element ={<GetUsers/>}/>
         <Route path="/contact" element ={<Contact/>}/>
         <Route path="/about" element ={<About/>}/>
       </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
