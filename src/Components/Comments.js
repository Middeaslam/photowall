import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addComment } from '../redux/actions';

const Comments = ({ id }) => {

    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const comments = useSelector(state => state.comments[id]) ?? []

    const handleComment = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment(comment, id));
        setComment('')
    }
    return (
        <div className='comment'>
            {
                comments.map((comment, index) => {
                    return (
                        <p key={index}>{comment}</p>
                    )
                })
            }
            <form className='comment-form' onSubmit={handleSubmit}>
                <input type='text' placeholder='comment' value={comment} onChange={handleComment} />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Comments