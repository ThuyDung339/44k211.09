import React from 'react'
import ListRoom from '../../components/ListRoom';
import { Button } from "antd";
import './style.css';
export default function Home() {
    return (
        <div className='home'>
            <div className="create-btn-wrapper">
                <Button type="primary" className='btn-create'>Tạo nhóm mới</Button>
            </div>
            <ListRoom />
        </div>
    )
}
