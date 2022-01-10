import { all } from "@redux-saga/core/effects";
import { UsersSaga, PostsSaga } from "./handlers";

export default function* rootSaga() {
    yield all([
        UsersSaga.watcherUserSaga(),
        PostsSaga.watcherPostSaga(),
        UsersSaga.removeUserSaga()
    ])
}