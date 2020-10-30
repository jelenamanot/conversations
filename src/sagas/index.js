import { all } from 'redux-saga/effects';

import conversationSaga from './conversationSaga';

export default function* rootSaga() {
	yield all([conversationSaga()]);
}
