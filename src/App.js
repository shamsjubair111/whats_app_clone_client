import React from "react";
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Welcome } from './Components/Welcome/Welcome';
import { Chat } from "./Components/Chat/Chat";


function App() {

  const userRegistered = localStorage.getItem("registered");



  return (
    <div>

      <BrowserRouter >
      <Routes>
      
     {
       userRegistered? 
       <Route path="/" element={<Chat/>} />

       :
     <>
       <Route path="/" element={<Welcome/>} />
       <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </>
     }
      
          
        </Routes>
      </BrowserRouter >


       
    </div>
  );
}

export default App;
