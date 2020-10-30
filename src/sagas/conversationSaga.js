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

function* getConversationByIdSaga(action) {
	try {
		const messages = yield call(
			ConversationService.getConversationMessages,
			action.id
		);

		yield put({
			type: conversationActionTypes.CONVERSATION_GET_BY_ID_SUCCESS,
			messages
		});
	} catch (error) {
		yield put({
			type: conversationActionTypes.CONVERSATION_GET_BY_ID_FAILURE,
			error
		});
	}
}

export default function* conversationSaga() {
	yield all([
		takeEvery(
			conversationActionTypes.CONVERSATION_GET_REQUEST,
			getConversationsSaga
		),
		takeEvery(
			conversationActionTypes.CONVERSATION_GET_BY_ID_REQUEST,
			getConversationByIdSaga
		)
	]);
}
