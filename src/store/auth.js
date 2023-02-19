import { computed } from "vue";
import http from "../services/http.js";
import { ref } from "vue";

export default function useAuth() {
    let isOkayNav = ref([]);
    isOkayNav.value = false;
    const setLocalStorage = (tokenValue, username) => {
        localStorage.setItem("token", tokenValue);
        localStorage.setItem("username", username);
    }

    const clearLocalStorage = async () => {
        isOkayNav.value = false;
        localStorage.removeItem("token");
        localStorage.removeItem("username");
    }

    const getToken = () => {
        return localStorage.getItem("token");
    }

    const getUsername = () => {
        return localStorage.getItem("username");
    }

    const isAuthenticated = computed(() => {
        return (getToken() != null);
    })

    async function checkToken() {
        getToken();
        console.log(getToken())
        getUsername();
        isOkayNav.value = false;
        if (getToken() == null || getUsername() == null) return false;
        try {
            await http.get('auth/validate/' + getUsername());
            isOkayNav.value = true;
            return true;
        } catch (error) {
            return false;
        }
    }

    return {
        isAuthenticated,
        setLocalStorage,
        getToken,
        clearLocalStorage,
        checkToken,
        isOkayNav
    }
}