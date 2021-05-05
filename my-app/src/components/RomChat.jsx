import React, { useEffect, useState } from 'react';

import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import dbfirebase  from "../firebase"
import 'react-chat-widget/lib/styles.css';
import { Button, Input ,Form} from 'antd';

export default function RomChat() {
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
  }
    const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
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
        <Form
          style={{display:"flex"}}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
            name="text"
      >
        <Input style={{width:'400px'}} />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </div>
      </div>
  )
}
