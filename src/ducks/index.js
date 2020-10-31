import { combineReducers } from 'redux';

import conversationReducer from './conversationDuck';
import userReducer from './userDuck';

const rootReducer = combineReducers({
	conversation: conversationReducer,
	user: userReducer
});

const appReducer = (state, action) => {
	return rootReducer(state, action);
};

export default appReducer;
