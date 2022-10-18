import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import React from 'react'
import { removePosts } from '../redux/actions';

const Photo = ({ post }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const comments = useSelector(state => state.comments[post.id]) ?? []

    const handleRemovePost = () => {
        dispatch(removePosts(post.id))
        navigate('/')
    }
    return (
        <figure className='figure'>
            <Link to={`/single/${post.id}`}>
                <img className='photo' src={post.imageLink} alt={post.description} />
            </Link>
            <figcaption>
                <p>{post.description}</p>
            </figcaption>
            <div className='button-container'>
                <button onClick={handleRemovePost}>Remove</button>
                <Link className='button' to={`/single/${post.id}`}>
                    <div className='comment-count'>
                        <div className='speech-bubble'></div>
                        {comments.length}
                    </div>
                </Link>
            </div>
        </figure>
    )
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Photo