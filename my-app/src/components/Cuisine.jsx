import React from 'react'
import { hightlight, PostAPI } from '../paragraphCuisine';
import { Link } from 'react-router-dom'
export default function Cuisine() {
    const posts = PostAPI.posts;
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
                    <Link to={`/cuisine/${item.id}`}>
                        <div className='post-travel'>
                            <div className='image-ar'>
                                <img src={item.image} alt="Logo" width='100%' />
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
