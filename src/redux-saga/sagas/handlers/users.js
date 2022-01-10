import { call, put, takeLatest } from "@redux-saga/core/effects";
import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from '../../action_types/users';
import { UsersRequests } from '../requests'

function* handleGetUsers() {
    try {
        const users = yield call(UsersRequests.fetchGetUsers);
        yield put({ type: GET_USERS_SUCCESS, users: users })
    } catch (error) {
        yield put({ type: GET_USERS_FAILED, message: error.message });
    }
}

function* handleRemoveUser() {
    try {
        const user = yield call(UsersRequests.removeUser);
        yield put({
            type: 'REMOVE_USER_SUCCESS', user: user
        })
    } catch (error) {
        yield put({
            type: 'REMOVE_USER_FAILED', message: error.message
        });
    }
}



function* watcherUserSaga() {
    yield takeLatest(GET_USERS_REQUESTED, handleGetUsers);
}

function* removeUserSaga() {
    yield takeLatest('REMOVE_USER_REQUEST', handleRemoveUser);
}

export const UsersSaga = {
    watcherUserSaga,
    removeUserSaga
}