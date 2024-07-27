import React from 'react'
import { Button, Form, Input } from 'antd';
import "../../style/register.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Register = () => {

    const navigate = useNavigate();
    
    const onFinish = (values) => {

      

        const userDetails = {
            email: values?.email,
            userName: values?.username,
            password: values?.password

        }

          axios.post('http://localhost:5000/createUser',userDetails)
          .then(res => {
            if(res?.status === 200){
             navigate("/login");
            }
          })
        
      };


      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


        return (

        <div className='registerCss'>


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
        label="Email"
        name="email"
        rules={[
            {
            required: true,
            message: 'Please input your email!',
            },
        ]}
        >
        <Input />

        </Form.Item>

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
        <Button type="primary" danger htmlType="submit">
            Register
        </Button>
        </Form.Item>
    </Form>

        </div>



    </div>
  )
}
