import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'ducks';
import rootSaga from 'sagas';

const appReducer = (state, action) => {
	return rootReducer(state, action);
};

const sagaMiddleware = createSagaMiddleware();
let enhancer = applyMiddleware(sagaMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
enhancer = composeEnhancers(enhancer);

const store = createStore(appReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
