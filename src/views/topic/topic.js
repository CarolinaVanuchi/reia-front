import { ref } from 'vue';
import http from "../../services/http.js";
import { useRouter } from 'vue-router';

export default function useTopic() {
    const topics = ref([]);
    const topicOne = ref([]);
    const router = useRouter();

    const getTopics = async () => {
        let resposnse = await http.get('topic');
        topics.value = resposnse.data;
    }

    const deleteTopic = async (id) => {
        try {
            await http.delete('topic/' + id);
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    const createTopic = async (data) => {
        try {
            await http.post('topic/', data);
            await router.push("/topic")
        } catch (error) {
            console.log(error);
        }
    }

    const getOneTopic = async (id) => {
        try {
            let response = await http.get('topic/' + id);
            topicOne.value = response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const updateTopic = async (id) => {
        try {
            await http.put('topic/' + id, {
                gpio: topicOne.value.gpio,
                topic: topicOne.value.topic,
                device: topicOne.value.device,
                typeData: topicOne.value.typeData,
                minInput: topicOne.value.minInput,
                maxInput: topicOne.value.maxInput,
                typeOutput: topicOne.value.typeOutput,
                minOutput: topicOne.value.minOutput,
                maxOutput: topicOne.value.maxOutput,
            });
            await router.push("/topic");
        } catch (error) {
            console.log(error)
            alert(error?.response?.data);
        }
    }

    return {
        topics,
        topicOne,
        getTopics,
        deleteTopic,
        createTopic,
        getOneTopic,
        updateTopic
    }
}