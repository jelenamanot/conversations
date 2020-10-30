import axios from 'axios';
// Config
import { API_URL } from '../config';

async function getConversations() {
	try {
		const response = await axios.get(`${API_URL}/conversations`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

const service = {
	getConversations
};

export default service;
