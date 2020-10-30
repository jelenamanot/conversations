import { all, put, call, takeEvery } from 'redux-saga/effects';
import UserService from 'services/userService';
import { actionTypes as userActionTypes } from 'ducks/userDuck';

function* getUserSaga() {
	try {
		const user = yield call(UserService.getUser);

		yield put({
			type: userActionTypes.USER_GET_SUCCESS,
			user
		});
	} catch (error) {
		yield put({
			type: userActionTypes.USER_GET_FAILURE,
			error
		});
	}
}

export default function* userSaga() {
	yield all([takeEvery(userActionTypes.USER_GET_REQUEST, getUserSaga)]);
}
