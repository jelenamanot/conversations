import { combineReducers } from 'redux';

import { conversationReducer } from './conversationDuck';

const rootReducer = combineReducers({
	conversation: conversationReducer
});

const appReducer = (state, action) => {
	return rootReducer(state, action);
};

export default appReducer;
