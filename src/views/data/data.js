import { ref } from 'vue';
import http from "../../services/http.js";
import { useRouter } from 'vue-router';

export default function useData() {
    const datas = ref([]);
    const router = useRouter();
    const dataArray = ref([]);
    const labelsArray = ref([]);

    const getDatas = async (id) => {
        try {
            let resposnse = await http.get('data/topic/'+id);
            datas.value = resposnse.data;
            // dataArray.add(datas.value)
            // labelsArray.add(datas.dataTime)
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    const data = {
        labels: labelsArray,
        datasets: [
          {
            label: 'Valores',
            backgroundColor: '#6A5ACD',
            data: dataArray
          }
        ]
      }

      const options = {
        responsive: true,
        maintainAspectRatio: false
      }

    return {
        datas,
        getDatas,
        // data,
        // options,
        labelsArray,
        dataArray
    }
}