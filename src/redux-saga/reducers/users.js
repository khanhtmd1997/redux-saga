import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from '../action_types';
import user from '../stores/initial_state';
const users = (state = user, action) => {
    switch (action.type) {
        case GET_USERS_REQUESTED:
            return { ...state, loading: true }
        case GET_USERS_SUCCESS:
            return { ...state, loading: false, users: action.users }
        case GET_USERS_FAILED:
            return { ...state, loading: false, error: action.message }
        default:
            return state;
    }
}

export default users