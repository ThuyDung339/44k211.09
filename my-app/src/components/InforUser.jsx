import React, {useState} from 'react';
import './style.css';

export default function InforUser() {
    return (
        <div className='InforUser'>
          <form> <h1>Thông Tin Cá Nhân</h1>
           <div>First Name:</div> 
           <input type="text" placeholder='First Name'/>
           <div>LastName:</div>
           <input type="text" placeholder='LastName'/>
           <div>Telephone:</div>
           <input type="int" placeholder='Telephone'/>
           <div>Email:</div>
           <input type="text" placeholder='Email'/>
           <button>
                Cập nhật
           </button>
           </form>
        </div>
    )
}
