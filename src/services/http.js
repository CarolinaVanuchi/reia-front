import axios from 'axios';
import useAuth from '../store/auth';

const auth = useAuth();
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-type': 'application/json',
        "Authorization": `bearer ${auth.getToken()}`
    }
});

export default axiosInstance;