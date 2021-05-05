import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Row, Col, Button, Modal, Popconfirm } from "antd";
import { useDispatch, useSelector } from 'react-redux'
import { deleteGroupChat, getRoomAction } from '../redux/user/action';
import { DeleteOutlined } from '@ant-design/icons';
import { EditGroupChat } from './EditGroupChat';
import Axios from 'axios';
import 'antd/dist/antd.css';

export default function ListRoom(props) {
  console.log(props, 'props...');
  const dispatch = useDispatch();
  const listRoomChat = useSelector(state => state.user.listRoomchat)
  const history = useHistory();
  const [idGroup, setIdGroup] = useState('');
  const inforUser = JSON.parse(localStorage.getItem('user-infor'));
  const handleJoin = function () {
    history.push('/chat/id')
  }
  const handleJoinAndCallApi = function (id) {
    console.log(' id',id)
    Axios.post(`http://localhost:3098/api/group/register`, {
      group_id: id
    }, {
      headers: {
        token: `${localStorage.getItem('token')}`
      }
    }).then((data) => {
      console.log(data, 'dât ')
          history.push('/chat/id')
    })
      .catch(err => {
        console.log('err', err);
    })
  }
  const [showConfirm, setShowConfirm] = useState(false);

  const onClickShowConfirmJoin = (id) => {
    setShowConfirm(true);
    setIdGroup(id);
  }

  const onClickHideConfirm = () => {
    setShowConfirm(false);
  }
  useEffect(() => {
    dispatch(getRoomAction(''));
  }, []);
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
  function confirm(id) {
 //   dispatch(deleteGroupChat(id));
     Axios.get(`http://localhost:3098/api/group/delete?id=${id}`, {
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
}
  return (
    <div className='list-room'>
      <Row className='row-roomchat' gutter={[48, 24]}>
      {listRoomChat && listRoomChat.map(data => (
        <Col span={12} className="col-roomchat">
          <div className="item">
            <div className='title-each-room'>
              <h4 style={{ "font-weight": "bold" }}>{data.name}</h4>
              {(inforUser && data.owner_id === inforUser.id) &&
                <div>
                <Popconfirm title="Are you sure？" okText="Yes" cancelText="No"
                    onConfirm={()=>confirm(data.id)}
                >
                      <DeleteOutlined />
                    </Popconfirm>
                {/* <EditOutlined /> */}
                <EditGroupChat data={data} />
              </div>
              }
            </div>
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
            <div>Số thành viên hiện tại: {data.user_group.length}</div>
            {data && data.user_group && data.user_group.findIndex(item => inforUser && item.user_id ===inforUser.id) > -1 ?
           <Button className='join' onClick={() => handleJoin()}>Chat</Button> :
                <Button className='join' onClick={() => onClickShowConfirmJoin(data.id)}>Tham gia</Button>
            }

           {/* <Button className='join' onClick={() => onClickShowConfirm()}>Tham gia</Button> */}
          </div>
        </Col>

    ))}  
      </Row>
      <Modal
        visible={showConfirm}
        footer={
          <>
          <button onClick={() => handleJoinAndCallApi(idGroup)}>
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
