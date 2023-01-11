import { ref } from 'vue';
import http from "../../services/http.js";
import { useRouter } from 'vue-router';

export default function useData() {
    const datas = ref([]);
    const router = useRouter();

    const getDatasByTopic = async (id) => {
        try {
            let resposnse = await http.get('data/topic/'+id);
            datas.value = resposnse.data;
        } catch (error) {
          console.log(error)
            alert(error?.response?.data);
        }
    }

    return {
        datas,
        getDatasByTopic
    }
}