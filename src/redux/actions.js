
export const removePosts = (index) => ({
    type: 'REMOVE_POSTS',
    payload: index
})


export const addPost = (post) => ({
    type: 'ADD_POST',
    payload: post
})

export const addComment = (comment, postId) => ({
    type: 'ADD_COMMENT',
    payload: { comment, postId }
})