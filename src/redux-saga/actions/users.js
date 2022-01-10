import { GET_USERS_REQUESTED } from "../action_types"

const getUsers = () => {
    return {
        type: GET_USERS_REQUESTED
    }
}

const removeUser = (id) => {
    return {
        type: 'REMOVE_USER_REQUEST',
    }
}

export const UsersAction = {
    getUsers,
    removeUser
}