import React from 'react'
import { Button, Form, Input } from 'antd';
import "../../style/login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();

  const onFinish = (values) => {
    

    const userDetails = {
      
        userName: values?.username,
        password: values?.password

    }

    axios.post("http://localhost:5000/login", userDetails)
    .then(res => {
      console.log(res?.data);
       if(res?.data){
        localStorage.setItem("registered",res?.data);
        localStorage.setItem("sender",userDetails?.userName);
        alert("Logged in successfully");
        navigate("/");
        window.location.reload();
       
        
       }
    })

   
    
  };


      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      
      return (
        

        <div className='loginCss'>


        <div>

        <Form
        name="basic"
        labelCol={{
        span: 8,
        }}
        wrapperCol={{
        span: 16,
        }}
        style={{
        maxWidth: 600,
        }}
        initialValues={{
        remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >


        
        <Form.Item
        label="Username"
        name="username"
        rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
        ]}
        >
        <Input />

        </Form.Item>

        <Form.Item
        label="Password"
        name="password"
        rules={[
            {
            required: true,
            message: 'Please input your password!',
            },
        ]}
        >
        <Input.Password />
        </Form.Item>



        <Form.Item
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
        >
        <Button type="primary" htmlType="submit">
            Login
        </Button>
        </Form.Item>
    </Form>

        </div>



    </div>


  )
}
