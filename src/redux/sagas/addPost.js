import { all, put, call, takeEvery } from "redux-saga/effects";
import { ADDED_POST, ADD_POST } from "../actions/actionType";
import axios from "axios";

export default function* addPostSaga() {
    yield takeEvery(ADD_POST, workerAddPostSaga);
}

function addPost(action) {
    return axios.post("https://61bfdf3ab25c3a00173f4f15.mockapi.io/user", action.payload);
}

function* workerAddPostSaga(action) {
    console.log(action)
    try {
        const postResponse = yield call(addPost(action));
        yield put({ type: ADDED_POST, payload: postResponse });
    } catch (err) {
        console.log(err);
    }
}