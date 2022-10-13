import Photo from './Photo'
import React from 'react'

const PhotoWall = (props) => {
    return (
        <div className='photoGrid'>
            {props.posts.map(post => <Photo key={post.id} post={post} />)}
        </div>
    )
}

export default PhotoWall