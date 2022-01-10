import { GET_POSTS_FAILED, GET_POSTS_REQUESTED, GET_POSTS_SUCCESS } from '../action_types';
import post from '../stores/initial_state';
const posts = (state = post, action) => {
    switch (action.type) {
        case GET_POSTS_REQUESTED:
            return { ...state, loading: true }
        case GET_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.posts }
        case GET_POSTS_FAILED:
            return { ...state, loading: false, error: action.message }
        default:
            return state;
    }
}

export default posts