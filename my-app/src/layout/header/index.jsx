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
import { useHistory } from 'react-router';
const menu = (
  <Menu>
    <Menu.Item>
      <a  rel="noopener noreferrer" href="/travel">
        Du lịch
      </a>
    </Menu.Item>
    <Menu.Item>
      <a  rel="noopener noreferrer" href="/cuisine">
        Ẩm thực
      </a>
    </Menu.Item>
  </Menu>
);
const Header = () => {
  const history = useHistory();
  const handleClick = function () {
      history.push("/infor-user");
  }
  const logout = function () {
    localStorage.removeItem("token");
    history.push("/login");
  }
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
                <UserOutlined onClick={handleClick} style={{ backgroundColor: "rgb(67, 146, 236)" }} />
                <Dropdown overlay={menu} placement="bottomCenter">
                  <CompassOutlined style={{ backgroundColor: "rgb(12, 145, 56)" }} />
                </Dropdown>                
                <MessageOutlined  style={{ backgroundColor: "rgb(233, 97, 19)"}} />
                <LogoutOutlined onClick={logout} style={{ backgroundColor: "rgb(40, 55, 73)" }} />
            </div>            
        </div>
    )
}
export default Header;