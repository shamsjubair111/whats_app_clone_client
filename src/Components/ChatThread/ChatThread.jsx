import React, { useEffect, useState } from 'react'
import "../../style/chatThread.css"
import axios from 'axios';
import { getOverflowOptions } from 'antd/es/_util/placements';

export const ChatThread = ({messageSender, messageReceiver}) => {

  const [message,setMessage] = useState(null);
  const [chatData,setChatData] = useState([]);

  const sender = localStorage.getItem('sender');
 
  

  useEffect(()=>{

    if(messageSender !== null && messageReceiver !== null){
      const requestParameters = {
        params: {
          sender: messageSender,
          receiver: messageReceiver
        }
      }
  
      axios.get("http://localhost:5000/getSpecificChat",requestParameters)
      .then(res => {
        console.log(res.data);
        setChatData(res?.data);
      })
    } 

    

  },[messageReceiver])

  console.log(messageReceiver, messageSender);

  const sendMessage = () =>{

    const  now = new Date();
    const hours = now.getHours();
    const  minutes = now.getMinutes();
    const  seconds = now.getSeconds();

    const messageDetails = {
      sender: messageSender,
      receiver: messageReceiver,
      content: message,
      time: `${hours}:${minutes}:${seconds}`
    }

    axios.post("http://localhost:5000/sendMessage",messageDetails)
    .then(res =>{
      console.log(res?.data);
    
    
    })
 
  }

  const createNewContact = () =>{

  }

  return (

    <div className='main-div'>

    <div className='chatSection me-3 mt-2' style={{ overflowY: 'scroll', overflowX: 'hidden'}}>

      {
        chatData?.map(individualChats => (
          <div key={individualChats?._id} className={(sender === individualChats?.sender)? 'mx-3 my-5 d-flex justify-content-end' : 'mx-3 my-5 d-flex justify-content-start'}>
            <h5>
              {individualChats?.content}
          </h5>
            </div>
        ))
      }

    </div>

    <div className='messageInputArea me-3'>
    <div class="my-3">
   
    <textarea class="form-control" onBlur={(e)=>{
      setMessage(e.target.value);
      
    }} id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    <div className='mb-3 d-flex justify-content-between' >
    <button type="button" onClick={createNewContact} class="btn btn-secondary px-3 py-2">Add New Contact</button>
    <button type="button" onClick={sendMessage} class="btn btn-success px-3 py-2">Send Message</button>
    </div>

    </div>

    </div>
  )
}
