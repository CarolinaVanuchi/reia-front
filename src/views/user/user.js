import { ref } from 'vue';
import http from "../../services/http.js";
import { useRouter } from 'vue-router';

export default function useUser() {
    const users = ref([]);
    const userOne = ref([]);
    const router = useRouter();


    const getUsers = async () => {
        try {
            let resposnse = await http.get('user');
            users.value = resposnse.data;
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    const getOneUser = async (id) => {
        try {
            let resposnse = await http.get('user/'+id);
            userOne.value = resposnse.data;
        } catch (error) {
            alert(error?.response?.data);
        }
    }
    
    const deleteUser = async (id) => {
        try {
            await http.delete('user/' + id);
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    const createUser = async (data) => {
        try {
            await http.post('user/', data);
            await router.push("/user")
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    const updateUser = async (id) => {
        try {
            await http.put('user/'+id, {name: userOne.value.name, username: userOne.value.username, password: userOne.value.password});
            await router.push("/user");
        } catch (error) {
            alert(error?.response?.data);
        }
    }


    return {
        users,
        userOne,
        getUsers,
        getOneUser,
        deleteUser,
        createUser,
        updateUser
    }
}