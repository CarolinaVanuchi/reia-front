import { computed } from "vue";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useAuth() {
    const router = useRouter();
    const token = ref([]);
    const idUser = ref([]);
    const isOK = ref([false]);

    const setLocalStorage = (tokenValue , idUserValue) => {
        localStorage.setItem("token", tokenValue );
        localStorage.setItem("idUser", idUserValue);
    }
    
    const clearLocalStorage = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("idUser");
        await router.push("/");
        location.reload();
    }
    
    const getToken = () => {
        return localStorage.getItem("token");
    }
    
    const getIdUser = () => {
        return localStorage.getItem("idUser");
    }
    const isAuthenticated = computed(() => {
        return (getToken() != null && getIdUser() != null);
    })

    return {
        token,
        idUser,
        isAuthenticated,
        setLocalStorage,
        getToken,
        getIdUser,
        clearLocalStorage
    }
}