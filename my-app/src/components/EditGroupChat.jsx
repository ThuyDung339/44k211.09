

import React, { useState , useEffect} from 'react';
import {  Modal, Form, Input, DatePicker, Upload, InputNumber, TimePicker } from 'antd';
import ImgCrop from "antd-img-crop";
import { useDispatch, useSelector } from 'react-redux'
import {  postCreateGroup as createGroupAction, getRoomAction } from '../redux/user/action';
import { EditOutlined } from '@ant-design/icons';
import Axios from 'axios';
import moment from 'moment';
import 'antd/dist/antd.css';
import './style.css';


const Demo = ({ fileList, onChangeImg , onPreview}) => {

  return (
    <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChangeImg}
        onPreview={onPreview}
        multiple={false}
      >
        {fileList.length < 1 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
};
export const CollectionCreateForm = ({ visible, onCreate, onCancel , data}) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([
          {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: data?.image||'',
      },
  ]);
  const onChangeImg = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  }
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  React.useEffect(() => {
    form.setFieldsValue({
      quantity: 1,
      id:data?.id,
    })    
  }, [])
  const dataRoomchatById = data;
  return (
    <Modal
      visible={visible}
      title="Edit a group"
      okText="Edit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate({...values,fileList});
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        title="form_in_modal"
        initialValues={{
          id:dataRoomchatById?.id,
          name: dataRoomchatById?.name,
          address: dataRoomchatById?.address,
          quantity: dataRoomchatById?.quantity,
          //2021-05-24T17:00:07.000Z
          date: moment(dataRoomchatById?.time),
          time: moment(dataRoomchatById?.time)
        }
       || {}}
      >
        <Form.Item
          name="id"
           hidden={true}
          rules={[
            {
              required: true,
              message: 'Please input the name group',
            },
          ]}
        >
          <Input />
        </Form.Item>          
        <Form.Item
          name="name"
          label="Tên nhóm"
          rules={[
            {
              required: true,
              message: 'Please input the name group',
            },
          ]}
        >
          <Input />
        </Form.Item>        
        <Form.Item
          name="address"
          label="Địa điểm"
          rules={[
            {
              required: true,
              message: 'Please input the address',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Số lượng"
          rules={[
            {
              required: true,
              message: 'Please input the quantity',
            },
          ]}
        >
          <InputNumber min={1}  />
        </Form.Item>        
        <Form.Item name="date" label="Thời gian"
            rules={[
            {
              required: true,
              message: 'Please choose date',
            },
          ]}>
          <DatePicker />
        </Form.Item>
        <Form.Item name="time"
            rules={[
            {
              required: true,
              message: 'Please choose time',
            },
          ]}>          
          <TimePicker  />
        </Form.Item>        
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please choose time',
            },
          ]}> 
          <Demo fileList={fileList} onChangeImg={onChangeImg} onPreview={onPreview} imageUpdate={data.image }/>
        </Form.Item>
      </Form>
    </Modal>
  );
};


export const EditGroupChat = ({data}) => {

  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const onCreate = (values) => { 
    const date = values?.date || '';
    const hour = values?.time || '';
    let formData = new FormData();
    let file = values.fileList[0].originFileObj;
    formData.append("file", file);
    formData.append("time", moment(
      `${moment(date).format('DD-MM-YYYY')} ${moment(hour).format(
        'HH:mm:ss',
      )}`,
      'DD-MM-YYYY HH:mm:ss',
    ).toISOString());
    formData.append("id", values.id);
    formData.append("address", values.address);
    formData.append("quantity", values.quantity);
    formData.append("name", values.name);

      Axios.put(`http://localhost:3098/api/group/update`,formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        token: `${localStorage.getItem('token')}`
      }
    }).then((data) => {
      dispatch(getRoomAction(''));
    })
      .catch(err => {
        console.log('err', err);
    })
    // dispatch(postCreateGroup());
    setVisible(false);
  };

  return (
    <>
      <EditOutlined onClick={() => {
          setVisible(true);
        }}/>
      <CollectionCreateForm
        visible={visible}
        data={data}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

