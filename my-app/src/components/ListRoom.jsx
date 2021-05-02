import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Row, Col, Button, Modal} from "antd";
import 'antd/dist/antd.css';

export default function ListRoom(props) {
  const { listRoomChat } = props;
  const history = useHistory();
  const handleJoin = function () {
    history.push('/chat/id')
  }

  const [showConfirm, setShowConfirm] = useState(false);

  const onClickShowConfirm = () => {
    setShowConfirm(true);
  }

  const onClickHideConfirm = () => {
    setShowConfirm(false);
  }

  const formatTime = (time) => {
    if (!time) return '';
    let d = new Date(time);
    let curr_date = d.getDate();
    let curr_month = d.getMonth() + 1;
    let curr_year = d.getFullYear();
    let curr_hours = d.getHours();
    let curr_minus = d.getMinutes();
    let curr_second = d.getSeconds();
    curr_second = curr_second < 10 ? '0' + curr_second : curr_second;
    curr_minus = curr_minus < 10 ? '0' + curr_minus : curr_minus;
    curr_hours = curr_hours < 10 ? '0' + curr_hours : curr_hours;
    curr_date = curr_date < 10 ? '0' + curr_date : curr_date;
    curr_month = curr_month < 10 ? '0' + curr_month : curr_month;

    return (
        curr_hours +
        ':' +
        curr_minus +
        ':' +
        curr_second +
        ' ' +
        curr_date +
        '-' +
        curr_month +
        '-' +
        curr_year
    );
}

  return (
    <div className='list-room'>
      <Row className='row-roomchat' gutter={[48, 24]}>
      {listRoomChat && listRoomChat.map(data => (
        <Col span={12} className="col-roomchat">
          <div className="item">
           <div>{ data.name}</div>
           <img
            src={`http://localhost:3098/${data.image}`}
            alt="logo"
            style={{
              maxWidth: "100%",
              height: "150px",
              objectFit: 'cover'
            }} />
          <div>Số lượng :{ data.quantity}</div>
          <div>Địa điểm :{ data.address}</div>
          <div>Thời gian :{formatTime(data.time)}</div>
           <Button className='join' onClick={() => onClickShowConfirm()}>Tham gia</Button>
        </div>
        </Col>
    ))}  
      </Row>
      <Modal
        visible={showConfirm}
        footer={
          <>
          <button onClick={() => handleJoin()}>
              Đồng ý
          </button>
            <button onClick={() => onClickHideConfirm()}>
              Hủy
          </button>
            </>
        }
      >
        <div>Bạn có muốn tham gia nhóm này?</div>
      </Modal>
      </div>
    )
}
