import React from 'react'
import { Row, Col, Button} from "antd";
import logo from './../assets/images/logo.png';
import 'antd/dist/antd.css';

const listRoomchat = [{id:1, quantity:2,address:'Cầu rồng', time:"12/11/2021"},{id:2, quantity:2,address:'Cầu rồng', time:"12/11/2021"}];
export default function ListRoom() {
  return (
    <div className='list-room'>
      <Row className='row-roomchat' gutter={[48, 24]}>
    {listRoomchat.map(data => (
        <Col span={12} className="col-roomchat">
          <div className="item">
          <div>{ data.id}</div>
              <img src={logo} alt="logo" style={{ width: "100%", height:"100px"}} />
          <div>Số lượng :{ data.quantity}</div>
          <div>Địa điểm :{ data.address}</div>
          <div>Thời gian :{data.time}</div>
          </div>
        </Col>
    ))}  
        </Row>
      </div>
    )
}
