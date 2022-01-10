import { all, put, call, takeEvery } from "redux-saga/effects";
import { DELETED_POST, DELETE_POST } from "../actions/actionType";
import axios from "axios";

export default function* deletePostSaga() {
    yield takeEvery(DELETE_POST, workerDeletePostSaga);
}

function deletePost(action) {
    return axios({
        method: "delete",
        url: "https://61bfdf3ab25c3a00173f4f15.mockapi.io/user" + '/' + action.payload
    });
}

function* workerDeletePostSaga(action) {
    try {
        const postResponse = yield call(deletePost(action));
        yield put({ type: DELETED_POST, payload: postResponse });
    } catch (err) {
        console.log(err);
    }
}