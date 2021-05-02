
import React from 'react'
import { PostAPIHl } from '../paragraphTravel';
import './style.css';

const HightlightPostCuisine = (props) => {
  const post = PostAPIHl.get(
   props.match.params.id
    )
    console.log(post, 'gì thế nhỉ')
     console.log(props,' props gì thế nhỉ')
  if (!post) {
    return <div>Sorry, but the posts was not found</div>
  }
  return (
    <div className='post-detail'>
      <h1 className ='title-detail'>{post.title} </h1>
      <div className='content-detail'>{post.content}</div>
      <div className='img-detail'><img src={post.image} alt="Logo" width='100%' /></div>
    </div>
  )
}

export default HightlightPostCuisine
