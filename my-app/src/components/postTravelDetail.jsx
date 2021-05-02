
import React from 'react'
import { PostAPI} from '../paragraphTravel';
import './style.css';

const PostTravelDetail = (props) => {
  const post = PostAPI.get(
   props.match.params.id
  )
  if (!post) {
    return <div>Sorry, but the posts was not found</div>
  }
  return (
    <div className='post-detail'>
      <h1 className ='title-detail'>{post.title} </h1>
      <div className='content-detail'>{post.content}</div>
      <div className='img-detail'><img src={post.image} alt="" width='100%' /></div>
    </div>
  )
}

export default PostTravelDetail
