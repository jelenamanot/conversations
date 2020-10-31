export const actionTypes = {
	USER_GET_REQUEST: 'USER_GET_REQUEST',
	USER_GET_SUCCESS: 'USER_GET_SUCCESS',
	USER_GET_FAILURE: 'USER_GET_FAILURE'
};

export const initialState = {
	user: {},
	error: null,
	isLoading: false
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.USER_GET_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case actionTypes.USER_GET_SUCCESS:
			return {
				...state,
				user: action.user,
				isLoading: initialState.isLoading,
				error: null
			};
		case actionTypes.USER_GET_FAILURE:
			return {
				...state,
				error: action.error,
				isLoading: initialState.isLoading
			};

		default:
			return state;
	}
}

export const actionCreators = {
	getUser: () => ({
		type: actionTypes.USER_GET_REQUEST
	})
};
