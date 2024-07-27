import React from 'react'
import "../../style/welcome.css"
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';



export const Welcome = () => {

    const navigate = useNavigate();

    const gotoRegisterPage = ()=>{
        navigate("/register");
    }

    const gotoLoginPage = ()=>{
        navigate("/login");
    }


  return (
    <div className='welcomeCss'>

        <div>
            
        <h1>Welcome To What's App Clone</h1>

        <h3>Login if you already have an account </h3>

        <h3> or</h3>

        <h3>Register if you want to create a new account</h3>

        <div className='btnPosition'>

      
       <Button type="primary" onClick={gotoLoginPage}>Login</Button>
     

      
       <Button type="primary" danger onClick={gotoRegisterPage}>Register</Button>
    

        </div>

        </div>

      


        
    </div>
  )
}
