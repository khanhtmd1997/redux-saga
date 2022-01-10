import { GET_USERS_REQUESTED } from "../action_types"

const getUsers = () => {
    return {
        type: GET_USERS_REQUESTED
    }
}

export const UsersAction = {
    getUsers
}