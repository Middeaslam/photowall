import React from 'react'

const Comments = () => {
    return (
        <div className='comment'>
            <form className='comment-form'>
                <input type='text' placeholder='comment' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Comments