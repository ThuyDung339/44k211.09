
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { postupdateInforUser, getInforUser } from '../redux/user/action';
import { Form, Input, Button } from 'antd';
import _ from 'lodash';
import 'antd/dist/antd.css';
import './style.css';


export const InforUser = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(postupdateInforUser(_.omit({ ...values, id: inforUser.id }, ['email'])));
  };
  useEffect(() => {
    dispatch(getInforUser());
  }, []);
  const inforUser = JSON.parse(localStorage.getItem('user-infor'));//useSelector(state=>state.user.inforUser)
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
  return (
    <div className='form-user-infor'>
      <Form
         {...layout} 
        name="basic"
        initialValues={ inforUser?inforUser:{} }
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          disabled
          label="Email"
          name="email"
        >
          <Input  disabled />
        </Form.Item>        
        <Form.Item
          label="Username"
          name="firstname"
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
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone!',
            },
            {
              maxLength: 11,
              message: 'Phone should be less than 11 character!',
            },
          ]}
        >
          <Input  type='number' />
        </Form.Item>        
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input your address!',
            },
          ]}
        >
          <Input />
        </Form.Item>        
        <Form.Item style={{float: 'right'}}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>      
    </div>
  );
};