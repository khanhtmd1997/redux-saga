import { GET_POSTS_REQUESTED } from "../action_types"

const getPosts = () => {
    return {
        type: GET_POSTS_REQUESTED
    }
}

export const PostsAction = {
    getPosts
}