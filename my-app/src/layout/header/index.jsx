import React from 'react'
import logo from '../../assets/images/logo.png';
import '../style.css';
import {
    LogoutOutlined,
    UserOutlined,
    MessageOutlined,
    SearchOutlined, CompassOutlined
} from '@ant-design/icons';
import { Input,Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Du lịch
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Ẩm thực
      </a>
    </Menu.Item>
  </Menu>
);
export default function index() {
    return (
        <div className='header'>
            <div>
              <img src={logo} alt="logo" style={{ width: "100px" }}/>            
            </div>
            <div className='search-header'>
               <Input placeholder='Tìm kiếm' />
               <button><SearchOutlined/></button> 
            </div>
            <div className='icon'>
                <UserOutlined style={{ backgroundColor: "rgb(67, 146, 236)" }} />
                <Dropdown overlay={menu} placement="bottomCenter">
                  <CompassOutlined style={{ backgroundColor: "rgb(12, 145, 56)" }} />
                </Dropdown>                
                <MessageOutlined  style={{ backgroundColor: "rgb(233, 97, 19)"}} />
                <LogoutOutlined style={{ backgroundColor: "rgb(40, 55, 73)" }} />
            </div>            
        </div>
    )
}
