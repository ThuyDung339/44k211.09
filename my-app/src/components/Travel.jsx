import React from 'react'
import {  PostAPI, PostAPIHl } from '../paragraphTravel';
import { Link } from 'react-router-dom';
import './style.css';

export default function Travel() {
    const posts = PostAPI.posts;
    const hightlight = PostAPIHl.posts;
    return (
        <div className= 'post-article'>
            <div className='hight-light'>
                {hightlight.map((item) => (
                   <Link to={`/travel/hight-light/${item.id}`}>
                        <div className='image-hl'>
                            <img src={item.image} alt="" width='100%' />
                        </div>
                        <div className="content-hl">
                            <h4>{item.title}</h4>
                            <p>{item.short}</p>
                        </div>
                    </Link>
                    ))}
            </div>
            <div className='article'>
                {posts.map((item) => (
                    <Link to={`/travel/${item.id}`}>
                        <div className='post-travel'>
                            <div className='image-ar'>
                                <img src={item.image} alt="" width='100%' />
                            </div>
                            <div className="content-ar">
                                <h4>{item.title}</h4>
                                <p>{item.short}</p>
                            </div>
                            </div>
                    </Link>    
                ))}
            </div>            
        </div>
    )
}

