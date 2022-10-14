import { Link } from 'react-router-dom'
import Photo from './Photo';
import PropTypes from 'prop-types';
import React from 'react';

const PhotoWall = (props) => {
    return (
        <>
            <Link to='/AddPhoto' className='addIcon'></Link>
            <div className='photoGrid'>
                {props.posts.sort(function (x, y) {
                    return y.id - x.id
                })
                    .map(post => <Photo key={post.id} post={post} onRemovePhoto={props.onRemovePhoto} />)}
            </div>
        </>
    )
}

PhotoWall.prototypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired,

}

export default PhotoWall