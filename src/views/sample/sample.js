import http from "../../services/http.js";

export default function useSample() {

    const sendSample = async (data) => {
        try {
            const res = await http.post('sample/', data);
            alert("Enviado com sucesso");
        } catch (error) {
            alert(error?.response?.data);
        }
    }

    return {
        sendSample
    }
}