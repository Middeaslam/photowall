import Photo from './Photo';
import PropTypes from 'prop-types';
import React from 'react';

const PhotoWall = (props) => {
    return (
        <>
            <a onClick={props.onNavigate} href='#AddPhoto'>Click me</a>
            {/* <button className='addIcon' onClick={props.onNavigate}>Add Photo</button> */}
            <div className='photoGrid'>
                {props.posts.map(post => <Photo key={post.id} post={post} onRemovePhoto={props.onRemovePhoto} />)}
            </div>
        </>
    )
}

PhotoWall.prototypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired
}

export default PhotoWall