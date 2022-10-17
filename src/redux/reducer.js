import posts from '../data/posts';

const postReducer = (state = posts, action) => {
    switch (action.type) {
        case 'REMOVE_POSTS':
            return [...state.filter(item => item.id !== action.payload)]
        default:
            return state
    }
}

export default postReducer