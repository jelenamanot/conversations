import { all, put, call, takeEvery } from 'redux-saga/effects';
import ConversationService from 'services/conversationService';
import { actionTypes as conversationActionTypes } from 'ducks/conversationDuck';

function* getConversationsSaga() {
	try {
		const conversations = yield call(ConversationService.getConversations);
		yield put({
			type: conversationActionTypes.CONVERSATION_GET_SUCCESS,
			conversations
		});
	} catch (error) {
		yield put({
			type: conversationActionTypes.CONVERSATION_GET_FAILURE,
			error
		});
	}
}

export default function* conversationSaga() {
	yield all([
		takeEvery(
			conversationActionTypes.CONVERSATION_GET_REQUEST,
			getConversationsSaga
		)
	]);
}
