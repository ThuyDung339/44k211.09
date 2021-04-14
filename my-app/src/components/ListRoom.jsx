import React from 'react'
import { useHistory } from 'react-router';
import { Row, Col, Button} from "antd";
import logo from './../assets/images/logo.png';
import 'antd/dist/antd.css';
const listRoomchat = [{id:1, quantity:2,address:'Cầu rồng', time:"12/11/2021"},{id:2, quantity:2,address:'Cầu rồng', time:"12/11/2021"}];
export default function ListRoom() {
    const history = useHistory();
  const handleJoin = function () {
    history.push('/chat/id')
  }
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
           <Button className='join' onClick={handleJoin}>Tham gia</Button>
        </div>
        </Col>
    ))}  
        </Row>
      </div>
    )
}
