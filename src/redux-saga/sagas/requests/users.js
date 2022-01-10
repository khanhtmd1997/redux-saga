import { BASE_URL } from "../../../configs";

const url = BASE_URL + "users";

const fetchGetUsers = () => {
    return fetch(url, {
        method: 'GET'
    })
        .then((response) => response.json())
        .catch(error => {
            throw error
        })
}

export const UsersRequests = {
    fetchGetUsers
}