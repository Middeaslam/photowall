import posts from '../data/posts';

export const postReducer = (state = posts, action) => {
    switch (action.type) {
        case 'REMOVE_POSTS':
            return [...state.filter(item => item.id !== action.payload)]
        case 'ADD_POST':
            return [...state, action.payload]
        default:
            return state
    }
}

export const commentReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (!state[action.payload.postId]) {
                return { ...state, [action.payload.postId]: [action.payload.comment] }
            } else {
                return { ...state, [action.payload.postId]: [...state[action.payload.postId], action.payload.comment] }
            }

        default:
            return state
    }
}

