import { all, put, call, takeEvery } from "redux-saga/effects";
import { UPDATED_POST, UPDATE_POST } from "../actions/actionType";
import axios from "axios";

export default function* updatePostSaga() {
    yield takeEvery(UPDATE_POST, workerUpdatePostSaga);
}

function updatePost(action) {
    return axios.put("https://61bfdf3ab25c3a00173f4f15.mockapi.io/user" + '/' + action.payload.id, action.payload);
}

function* workerUpdatePostSaga(action) {
    try {
        const postResponse = yield call(updatePost(action));
        yield put({ type: UPDATED_POST, payload: postResponse });
    } catch (err) {
        console.log(err);
    }
}