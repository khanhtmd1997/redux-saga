import { call, put, takeLatest } from "@redux-saga/core/effects";
import { GET_POSTS_FAILED, GET_POSTS_REQUESTED, GET_POSTS_SUCCESS } from "../../action_types";
import { } from '../../action_types/users';
import { PostsRequests } from '../requests'

function* handleGetPosts() {
    try {
        const posts = yield call(PostsRequests.fetchGetPosts);
        yield put({ type: GET_POSTS_SUCCESS, posts: posts })
    } catch (error) {
        yield put({ type: GET_POSTS_FAILED, message: error.message });
    }
}

function* watcherPostSaga() {
    yield takeLatest(GET_POSTS_REQUESTED, handleGetPosts);
}

export const PostsSaga = {
    watcherPostSaga
}