import { ref } from 'vue';
import http from "../../services/http.js";
import { useRouter } from 'vue-router';

export default function useTopic() {
    const topics = ref([]);
    const topicOne = ref([]);
    const router = useRouter();

    const getTopics = async () => {
        try {
            let resposnse = await http.get('topic');
            topics.value = resposnse.data;
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    const deleteTopic = async (id) => {
        try {
            await http.delete('topic/' + id);
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    return {
        topics,
        topicOne,
        getTopics,
        deleteTopic
    }
}