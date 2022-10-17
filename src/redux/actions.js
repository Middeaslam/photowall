
export const removePosts = (index) => ({
    type: 'REMOVE_POSTS',
    payload: index
})


export const addPost = (post) => ({
    type: 'ADD_POST',
    payload: post
})