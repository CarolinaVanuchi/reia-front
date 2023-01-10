import { ref } from 'vue';
import http from "../../services/http.js";
import { useRouter } from 'vue-router';

export default function useData() {
    const datas = ref([]);
    const router = useRouter();

    const getDatas = async () => {
        try {
            let resposnse = await http.get('data/5');
            datas.value = resposnse.data;
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    return {
        datas,
        getDatas
    }
}