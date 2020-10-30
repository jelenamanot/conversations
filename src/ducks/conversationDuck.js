export const actionTypes = {
	CONVERSATION_GET_REQUEST: 'CONVERSATION_GET_REQUEST',
	CONVERSATION_GET_SUCCESS: 'CONVERSATION_GET_SUCCESS',
	CONVERSATION_GET_FAILURE: 'CONVERSATION_GET_FAILURE',

	CONVERSATION_GET_BY_ID_REQUEST: 'CONVERSATION_GET_BY_ID_REQUEST',
	CONVERSATION_GET_BY_ID_SUCCESS: 'CONVERSATION_GET_BY_ID_SUCCESS',
	CONVERSATION_GET_BY_ID_FAILURE: 'CONVERSATION_GET_BY_ID_FAILURE',

	CONVERSATION_POST_MESSAGE_REQUEST: 'CONVERSATION_POST_MESSAGE_REQUEST',
	CONVERSATION_POST_MESSAGE_SUCCESS: 'CONVERSATION_POST_MESSAGE_SUCCESS',
	CONVERSATION_POST_MESSAGE_FAILURE: 'CONVERSATION_POST_MESSAGE_FAILURE'
};

export const initialState = {
	conversations: [],
	messages: [],
	error: null,
	isLoading: false,
	currentConversationId: null
};

export const conversationReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CONVERSATION_GET_REQUEST:
		case actionTypes.CONVERSATION_POST_MESSAGE_REQUEST:
			return {
				...state,
				isLoading: true
			};

		case actionTypes.CONVERSATION_GET_BY_ID_REQUEST:
			return {
				...state,
				isLoading: true,
				currentConversationId: action.id
			};

		case actionTypes.CONVERSATION_GET_SUCCESS:
			return {
				...state,
				conversations: action.conversations,
				isLoading: initialState.isLoading,
				error: null
			};

		case actionTypes.CONVERSATION_GET_BY_ID_SUCCESS:
			return {
				...state,
				messages: action.messages,
				isLoading: initialState.isLoading,
				error: null
			};

		case actionTypes.CONVERSATION_POST_MESSAGE_SUCCESS:
			return {
				...state,
				isLoading: initialState.isLoading,
				messages: [...state.messages, action.newMessage],
				error: null
			};

		case actionTypes.CONVERSATION_GET_FAILURE:
		case actionTypes.CONVERSATION_GET_BY_ID_FAILURE:
		case actionTypes.CONVERSATION_POST_MESSAGE_FAILURE:
			return {
				...state,
				error: action.error,
				isLoading: initialState.isLoading
			};

		default:
			return state;
	}
};

export const actionCreators = {
	getConversations: () => ({
		type: actionTypes.CONVERSATION_GET_REQUEST
	}),
	getConversationById: (id) => ({
		type: actionTypes.CONVERSATION_GET_BY_ID_REQUEST,
		id
	}),
	postMessage: (content) => ({
		type: actionTypes.CONVERSATION_POST_MESSAGE_REQUEST,
		content
	})
};
