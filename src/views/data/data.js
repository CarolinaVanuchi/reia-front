import { ref } from 'vue';
import http from "../../services/http.js";
import { useRouter } from 'vue-router';

export default function useData() {
    const datas = ref([]);

    const getDatasByTopic = async (id) => {
        try {
            let resposnse = await http.get('data/topic/' + id);
            datas.value = resposnse.data;
        } catch (error) {
            console.log(error)
        }
    }

    const getDatasByDevice = async (id, dataBegin, dataEnd) => {
        try {
            let response = await http.get('data/device/' + id + "/" + dataBegin + "/" + dataEnd);
            datas.value = response.data;
        } catch (error) {
            console.log(error)
        }
    }
    return {
        datas,
        getDatasByTopic,
        getDatasByDevice
    }
}