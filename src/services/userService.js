import axios from 'axios';
// Config
import { API_URL } from 'config';

async function getUser() {
	try {
		const response = await axios.get(`${API_URL}/user`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

const service = {
	getUser
};

export default service;
