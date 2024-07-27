import React, { useEffect, useState } from 'react'
import "../../style/chatThread.css"
import axios from 'axios';


export const ChatThread = ({messageSender, messageReceiver}) => {

  const [message,setMessage] = useState('');
  const [chatData,setChatData] = useState([]);
  const [updateChat, setUpdateChat] = useState(false);


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

    

  },[messageReceiver, updateChat])

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

    if(messageReceiver !== null && message.length >0){
      axios.post("http://localhost:5000/sendMessage",messageDetails)
      .then(res =>{
        console.log(res?.data);
        setMessage('');
        setUpdateChat(!updateChat);
        alert('message sent successfully');
       
      })
    }
    else{
      alert("Enter your text in the input box");
    }
 
  }

  const createNewContact = () =>{

  }

  return (

    <div className='main-div'>

    <div className='chatSection me-3 mt-2' style={{ overflowY: 'scroll', overflowX: 'hidden'}}>

      {
        chatData?.map(individualChats => (
          <div key={individualChats?._id} className={(sender === individualChats?.sender)? 'mx-3 my-4 d-flex justify-content-end' : 'mx-3 my-5 d-flex justify-content-start'}>
            <span className={(sender === individualChats?.sender)? 'receiver' : 'sender'}>
              {individualChats?.content}
          </span>
            </div>
        ))
      }

    </div>

    <div className='messageInputArea me-3'>
    <div class="my-3">
   
    <textarea class="form-control" onChange={(e)=>{
      setMessage(e.target.value);
      
    }} id="exampleFormControlTextarea1" rows="3" value={message}></textarea>
    </div>

    <div className='mb-3 d-flex justify-content-between' >
    <button type="button" onClick={createNewContact} class="btn btn-secondary px-3 py-2">Add New Contact</button>
    <button type="button" onClick={() =>{
            localStorage.removeItem("registered");
            localStorage.removeItem('sender');
            window.location.reload();
    }} class="btn btn-danger px-3 py-2">Log Out</button>
    <button type="button" onClick={sendMessage} class="btn btn-success px-3 py-2">Send Message</button>
    </div>

    </div>

    </div>
  )
}
