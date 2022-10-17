import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react'
import { removePosts } from '../redux/actions';
import { useDispatch } from 'react-redux';

const Photo = ({ post }) => {
    const dispatch = useDispatch();

    const handleRemovePost = () => {
        dispatch(removePosts(post.id))
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
            </div>
        </figure>
    )
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Photo