import { Link } from 'react-router-dom'
import Photo from './Photo';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

const PhotoWall = () => {



    const posts = useSelector((state) => state.posts)
    return (
        <>
            <Link to='/AddPhoto' className='addIcon'></Link>
            <div className='photoGrid'>
                {posts.sort(function (x, y) {
                    return y.id - x.id
                })
                    .map(post => <Photo key={post.id} post={post} />)}
            </div>
        </>
    )
}

PhotoWall.prototypes = {
    posts: PropTypes.array.isRequired,
}

export default PhotoWall