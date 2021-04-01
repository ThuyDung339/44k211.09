import React from 'react'
import { Row, Col } from "antd";
import 'antd/dist/antd.css';
import logo from './../assets/images/logo.png';
export default function ListRoom() {
  // const roomChat = [
  //   {
  //     _id: '1',
  //     image: "https://www.pinterest.com/pin/329114685275863880/",
  //     quantity: "",
  //     place: "",
  //     time:""
  //   },
  //   {
  //     _id: '1',
  //     image: "https://www.pinterest.com/pin/329114685275863880/",
  //     quantity: "",
  //     place: "",
  //     time:""
  //   },]
  return (
    <div className='list-room'>
      <Row className='row-roomchat' gutter={[48,24]}>
        <Col span={12} className="col-roomchat">
          <div className="item">
              <div>2345678</div>
              <img src={logo} alt="logo" style={{ width: "100%", height:"100px"}} />
              <div>Số lượng :</div>
              <div>Địa điểm :</div>
              <div>Thời gian :</div>
          </div>
          </Col>
        <Col span={12} className="col-roomchat">
          <div className="item">
              <div>2345678</div>
              <img src={logo} alt="logo" style={{ width: "100%", height:"100px"}} />
              <div>Số lượng :</div>
              <div>Địa điểm :</div>
              <div>Thời gian :</div>
          </div>
        </Col>
        <Col span={12} className="col-roomchat">
          <div className="item">
              <div>2345678</div>
              <img src={logo} alt="logo" style={{ width: "100%", height:"100px"}} />
              <div>Số lượng :</div>
              <div>Địa điểm :</div>
              <div>Thời gian :</div>
          </div>
        </Col>        
        </Row>
      </div>
    )
}
