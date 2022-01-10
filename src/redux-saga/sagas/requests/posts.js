import { BASE_URL } from "../../../configs";

const url = BASE_URL + "posts";

const fetchGetPosts = () => {
    return fetch(url, {
        method: 'GET'
    })
        .then((response) => response.json())
        .catch(error => {
            throw error
        })
}

export const PostsRequests = {
    fetchGetPosts
}