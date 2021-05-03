

import React, { useState , useEffect} from 'react';
import { Button, Modal, Form, Input, DatePicker, Upload, InputNumber, TimePicker } from 'antd';
import ImgCrop from "antd-img-crop";
import ListRoom from '../../components/ListRoom';
import { useDispatch, useSelector } from 'react-redux'
import {  getInforUser, getRoomAction, postCreateGroup } from '../../redux/user/action';
import moment from 'moment';
import 'antd/dist/antd.css';
import './style.css';
import Axios from 'axios';


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
export const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
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
      quantity:1
    })    
  }, [])  
  return (
    <Modal
      visible={visible}
      title="Create a new group"
      okText="Create"
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
        }}
      >
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
          <InputNumber min={1}  defaultValue={1}  />
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
        <Form.Item>
          <Demo fileList={fileList} onChangeImg={onChangeImg} onPreview={onPreview}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};


export const CollectionsPage = (props) => {
  const { getRoom } = props;
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
    formData.append("address", values.address);
    formData.append("quantity", values.quantity);
    formData.append("name", values.name);

    Axios.post(`http://localhost:3098/api/group/add`,formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        token: `${localStorage.getItem('token')}`
      }
    }).then((data) => {
      getRoom();
    })
      .catch(err => {
        console.log('err', err);
    })
    // dispatch(postCreateGroup());
    setVisible(false);
    
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Tạo nhóm
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};


export default function Home() {
  const listRoomChat = useSelector(state => state.user.listRoomChat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInforUser());
     dispatch(getRoomAction(''));
  }, []);

  const getRoom = () => {
    dispatch(getRoomAction(''));
  }
    return (
        <div className='home'>
            <div className="create-btn-wrapper">
          <CollectionsPage getRoom={getRoom}/>
            </div>
            <ListRoom listRoomChat={listRoomChat} />           
        </div>
    )
}
