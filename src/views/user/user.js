import { ref } from 'vue';
import http from "../../services/http.js";
import { useRouter } from 'vue-router';

export default function useUser() {
    const users = ref([]);
    const userOne = ref([]);
    const router = useRouter();


    const getUsers = async () => {
        try {
            let resposnse = await http.get('users');
            users.value = resposnse.data;
        } catch (error) {
            alert(error?.response?.data.msg);
        }
    }

    const getOneUser = async (id) => {
        try {
            let resposnse = await http.get('users/'+id);
            userOne.value = resposnse.data;
        } catch (error) {
            console.log(error)
            alert(error?.response?.data.msg);
        }
    }
    const deleteUser = async (id) => {
        try {
            await http.delete('users/' + id);
        } catch (error) {
            alert(error?.response?.data.msg);
        }
    }

    const createUser = async (data) => {
        try {
            await http.post('users/', data);
            await router.push("/list_user")
        } catch (error) {
            alert(error?.response?.data.msg);
        }
    }

    const updateUser = async (id) => {
        try {
            await http.put('users/'+id, {name: userOne.value.name, username: userOne.value.username, password: userOne.value.password});
            await router.push("/list_user");
        } catch (error) {
            alert(error?.response?.data.msg);
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