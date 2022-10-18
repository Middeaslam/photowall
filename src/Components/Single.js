import Comments from './Comments';
import Photo from './Photo';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Single = () => {
    const { id } = useParams();

    const posts = useSelector((state) => state.posts);
    const post = posts.find((post) => post.id === id)


    return (
        <div className='single-photo'>
            <Photo post={post} />
            <Comments id={id} />
        </div>
    )
}

export default Single