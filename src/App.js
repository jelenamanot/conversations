import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import 'antd/dist/antd.css';
// Screens
import ConversationScreen from 'screens/ConversationScreen';

const App = () => {
	return (
		<Provider store={store}>
			<ConversationScreen />
		</Provider>
	);
};

export default App;
