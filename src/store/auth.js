import { computed } from "vue";
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import http from "../services/http.js";

export default function useAuth() {
    const router = useRouter();
    const token = ref([]);

    const setLocalStorage = (tokenValue, username) => {
        localStorage.setItem("token", tokenValue);
        localStorage.setItem("username", username);
    }
    
    const clearLocalStorage = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
    }
    
    const getToken = () => {
        return localStorage.getItem("token");
    }

    const getUsername = () => {
        return localStorage.getItem("username");
    }
    
    const isAuthenticated = computed( () => {
        return (getToken() != null);
    })

    async function checkToken() {
        if (getToken() == null || getUsername() == null) return false;
        const response = await http.get('auth/validate/' + getUsername());
        return response.data;
    } 

    return {
        token,
        isAuthenticated,
        setLocalStorage,
        getToken,
        clearLocalStorage,
        checkToken
    }
}