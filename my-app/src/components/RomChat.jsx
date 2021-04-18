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
      console.log(postData, 'hehe');  // <------
      setConversation(postData);
    });

  }, []);
  const [conversation, setConversation] = useState([]);
  const  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API (id_user and message)
  }
  const listchat = [
    {
      id: "1",
      name: 'Nga',
      content: [{ text: "left", time: "14h ngày 30" }, { text: "left left left ", time: "15h ngày 30" }]
    },
    {
      id: "2",
      name: 'Lan',
      content: [{ text: "right", time: "14h ngày 30" }, { text: "right bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffff nananaaa ", time: "15h ngày 30" }]
    }
  ];
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
