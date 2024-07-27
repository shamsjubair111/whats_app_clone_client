import React, { useEffect, useState } from 'react'
import { ChatList } from '../ChatList/ChatList'
import { ChatThread } from '../ChatThread/ChatThread'
import axios from 'axios';

export const Chat = () => {

    const [users, setUsers] = useState([]);
    const sender = localStorage.getItem("sender");
    const [receiver,setReceiver] = useState(null);

    const updateReceiver = (data) =>{
        console.log(data);
        setReceiver(data?.userName);
    }

    useEffect(()=>{

        axios.get("http://localhost:5000/getAllUsers")
        .then(res => {
            
            console.log(res?.data);
            setUsers(res?.data);
        })

    },[])

  return (
    
    <div className=' px-5' style={{backgroundColor: '#fc766aff'}}>

    <div className='row'>

    <div className='col-3'>

        <ChatList users={users} updateReceiver={updateReceiver}  />
    
    </div>

    <div className='col-9'>

        <ChatThread messageSender={sender} messageReceiver={receiver}/>
    
    </div>

    </div>

    </div>
  )
}
