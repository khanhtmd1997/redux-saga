import { all } from '@redux-saga/core/effects';
import deletePostSaga from './deletePost';
import getPostsSaga from './getPost';
import addPostSaga from './addPost';
import updatePostSaga from './updatePost';
// import getPostsSaga from "./getPosts";

export default function* rootSaga() {
    yield all([getPostsSaga(), deletePostSaga(), addPostSaga(), updatePostSaga()])
}