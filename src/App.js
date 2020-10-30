import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from 'store';
import 'antd/dist/antd.css';
import { theme } from 'config';
// Screens
import ConversationScreen from 'screens/ConversationScreen';

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<ConversationScreen />
			</ThemeProvider>
		</Provider>
	);
};

export default App;
