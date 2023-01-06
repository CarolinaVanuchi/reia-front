import { ref } from 'vue';
import http from "../services/http.js";

export default function useUser() {
    const users = ref([]);

    const getUsers = async () => {
        let resposnse = await http.get('users');
        users.value = resposnse.data;
    }

    const deleteUser = async (id) => {
         await http.delete('users/'+id);
    }
    return {
        users,
        getUsers,
        deleteUser
    }
}