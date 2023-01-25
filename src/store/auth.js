import { computed } from "vue";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useAuth() {
    const router = useRouter();
    const token = ref([]);

    const setLocalStorage = (tokenValue) => {
        localStorage.setItem("token", tokenValue);
    }
    
    const clearLocalStorage = async () => {
        localStorage.removeItem("token");
        await router.push("/");
        location.reload();
    }
    
    const getToken = () => {
        return localStorage.getItem("token");
    }

    const isAuthenticated = computed(() => {
        return (getToken() != null);
    })

    return {
        token,
        isAuthenticated,
        setLocalStorage,
        getToken,
        clearLocalStorage
    }
}