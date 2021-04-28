import React from 'react'
import { hightlight,posts } from '../paragraphTravel'
import './style.css';

export default function Travel() {

    return (
        <div className= 'post-article'>
            <div className='hight-light'>
                <div className='image-hl'>
                    <img src={hightlight.image} alt="Logo" width='100%' />
                </div>
                <div className="content-hl">
                    <h4>{hightlight.title}</h4>
                    <p>{ hightlight.short}</p>
                </div>
            </div>
            <div className='article'>
                {posts.map((item) => (
                    <div className='post-travel'>
                        <div className='image-ar'>
                            <img src={item.image} alt="Logo" width='100%' />
                        </div>
                        <div className="content-ar">
                            <h4>{item.title}</h4>
                            <p>{item.short}</p>
                        </div>
                    </div>    
                ))}
            </div>            
        </div>
    )
}
