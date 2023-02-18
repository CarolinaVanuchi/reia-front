import { ref } from 'vue';
import http from "../../services/http.js";
import { useRouter } from 'vue-router';

export default function useDevice() {
    const devices = ref([]);
    const deviceOne = ref([]);
    const router = useRouter();


    const getDevices = async () => {
        try {
            let resposnse = await http.get('device');
            devices.value = resposnse.data;
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    const deleteDevice = async (id) => {
        try {
            await http.delete('device/' + id);
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    const createDevice = async (data) => {
        try {
            await http.post('device/', data);
            await router.push("/device");
        } catch (error) {
            console.log(error);
        }
    }

    const updateDevice = async (id) => {
        try {
            await http.put('device/' + id, { name: deviceOne.value.name, ip: deviceOne.value.ip, port: deviceOne.value.port });
            await router.push("/device");
        } catch (error) {
            console.log(error)
        }
    }

    const getOneDevice = async (id) => {
        try {
            let response = await http.get('device/' + id);
            deviceOne.value = response.data;
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    return {
        devices,
        deviceOne,
        getDevices,
        deleteDevice,
        createDevice,
        getOneDevice,
        updateDevice
    }
}