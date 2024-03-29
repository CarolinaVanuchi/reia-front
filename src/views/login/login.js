import { ref } from 'vue';
import http from "../../services/http.js";
import { useRouter } from 'vue-router';
import useAuth from "../../store/auth";

export default function useLogin() {
    
    const { setLocalStorage, clearLocalStorage, isOkayNav } = useAuth();
    const router = useRouter();

    const login = async (data) => {
        try {
            const response = await http.post("auth/login", data);
            setLocalStorage(response.data.token, response.data.username);
            isOkayNav.value = true;
            console.log(isOkayNav.value)
            await router.push("/data_topic");
            location.reload();
        } catch (error) {
            console.log(error.message);
            clearLocalStorage();
        }
    }

    return {
        login
    }
}