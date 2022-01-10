import { combineReducers } from "redux";

import getPosts from "./getPosts";
import deletePost from "./deletePost";
import addPost from "./addPost";
import updatePost from "./updatePost";
export default combineReducers({
    getPosts,
    deletePost,
    addPost,
    updatePost
});