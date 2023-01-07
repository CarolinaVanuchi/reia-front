import { ref } from 'vue';
import http from "../../services/http.js";
import { useRouter } from 'vue-router';
import useAuth from "../../store/auth";

export default function useLogin() {
    
    const { setLocalStorage, clearLocalStorage } = useAuth();
    const router = useRouter();

    const login = async (data) => {
        try {
            const response = await http.post("auth/login", data);
            setLocalStorage(response.data.token, response.data.id);
            await router.push("/data");
            location.reload();
        } catch (error) {
            alert(error?.response?.data.msg);
            clearLocalStorage();
        }
    }

    return {
        login
    }
}