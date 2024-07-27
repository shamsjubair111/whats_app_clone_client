import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../../style/chatList.css"

export const ChatList = ({users, updateReceiver}) => {

  
  return (
    
    <div className='mt-2'>

        {
            users?.map(singleUser => (
                <div className='chatListStyle' key={singleUser?._id}>
                    <h2 onClick={()=> updateReceiver(singleUser)}>{singleUser?.userName}</h2>
                </div>
            ))
        }

    </div>
  )
}
