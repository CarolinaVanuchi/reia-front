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

    const createTopic = async (data) => {
        try {
            await http.post('topic/', data);
            await router.push("/topic")
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    const getOneTopic = async (id) => {
        try {
            let response = await http.get('topic/' + id);
            topicOne.value = response.data;
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    const updateTopic = async (id) => {
        try {
            await http.put('topic/' + id, {
                name: topicOne.value.name,
                gpio: topicOne.value.gpio,
                gpioInput: topicOne.value.gpioInput,
                topic: topicOne.value.topic,
                device: topicOne.value.device,
                typeData: topicOne.value.typeData,
                minValueData: topicOne.value.minValueData,
                maxValueData: topicOne.value.maxValueData,
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