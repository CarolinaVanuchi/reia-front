import { ref } from 'vue';
import http from "../../services/http.js";
import { useRouter } from 'vue-router';

export default function useLogin() {

    // const router = useRouter();

    const login = async (data) => {
        try {
            console.log('aaa')
            console.log(data)
            const response = await http.post("auth/login", data);
            localStorage.setItem("token", response.data.token);
            // auth.setToken(response.data.token);
        } catch (error) {
            localStorage.setItem("token", "");
            // auth.clearToken();
            alert(error?.response?.data.msg);
        }
    }

    return {
        login
    }
}