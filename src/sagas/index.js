import { all } from 'redux-saga/effects';

import conversationSaga from './conversationSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
	yield all([conversationSaga(), userSaga()]);
}
