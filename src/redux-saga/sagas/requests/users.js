import { BASE_URL } from "../../../configs";

const url = BASE_URL + "user";

async function fetchGetUsers() {
    try {
        const response = await fetch(url, {
            method: 'GET'
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function removeUser(id) {
    try {
        const response = await fetch(url + '/' + id, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export const UsersRequests = {
    fetchGetUsers,
    removeUser
}