import { all, put, call, takeEvery } from "redux-saga/effects";
import { GET_POSTS, GOT_POSTS } from "../actions/actionType";
import axios from "axios";

export default function* getPostsSaga() {
    yield takeEvery(GET_POSTS, workerPostSaga);
}

function fetchPosts() {
    return axios({
        method: "get",
        url: "https://61bfdf3ab25c3a00173f4f15.mockapi.io/user"
    });
}

function* workerPostSaga() {
    try {
        const postsResponse = yield call(fetchPosts);
        yield put({ type: GOT_POSTS, payload: postsResponse });
    } catch (err) {
        console.log(err);
    }
}