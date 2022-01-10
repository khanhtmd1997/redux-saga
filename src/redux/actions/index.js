import { ADD_POST, DELETE_POST, GET_POSTS, UPDATE_POST } from "./actionType";

export const getPosts = () => {
    return {
        type: GET_POSTS,
    };
};

export const deletePost = (id) => {
    return {
        type: DELETE_POST, payload: id
    };
};

export const addPost = (data) => {
    return {
        type: ADD_POST, payload: data
    };
};

export const updatePost = (data) => {
    return {
        type: UPDATE_POST, payload: data
    };
};