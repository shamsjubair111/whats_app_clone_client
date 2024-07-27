import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../../style/chatList.css"

export const ChatList = ({users, updateReceiver}) => {

  
  return (
    
    <div className='mt-2 hoverstyle'>

        {
            users?.map(singleUser => (
                <div className='chatListStyle' key={singleUser?._id} onClick={()=> updateReceiver(singleUser)}>
                    <h2>{singleUser?.userName}</h2>
                </div>
            ))
        }

    </div>
  )
}
