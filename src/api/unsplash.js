import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers:{
				Authorization: 'Client-ID 0Tz_Qq1MctKKbBJMo_cw9KNfrI_XGv2lSeQiRWk9OcE'
			}
});