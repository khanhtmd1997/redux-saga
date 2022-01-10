import users from "./users";
import posts from "./posts";
import { combineReducers } from "redux";

const reducers = combineReducers({
    users,
    posts
});

export default reducers;
