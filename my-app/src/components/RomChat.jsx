import React, { useEffect, useState } from 'react';

import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import dbfirebase  from "../firebase"
import 'react-chat-widget/lib/styles.css';
import { Button, Input } from 'antd';

export default function RomChat() {
  //addUserMessage còn cái này chưa dùng nữa
  useEffect(() => {
    return dbfirebase.collection('cccc').onSnapshot((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      setConversation(postData);
    });

  }, []);
  const [conversation, setConversation] = useState([]);
  const  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API (id_user and message)
  }
  return (
    <div className="roomchat">
      <div className='list-content-chat'>
        <div>Title: Địa điểm</div>
        {(conversation.length > 0) &&
          (conversation.map(data => (
          <>
            {data.content.map(item => (// sẽ sửa lại thành data.id 
              <div className={data.name==='An'?"left ":"right"}>{item.text}</div>
            ))}
          </>
        )) )       
        }
      </div>
      <div className='typing'>
        <Input />
        <Button>Send</Button>
      </div>
      </div>
  )
}
