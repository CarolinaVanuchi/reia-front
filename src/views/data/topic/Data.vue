<template>
    <div class="device">
        <div class="container-fluid">
            <div class="row" style="margin-top: 30px">
                <hr />
                <h3>Dados por tópico</h3>
                <hr />
            </div>
            <form @submit.prevent="getItens">
                <div class="row mt-3">
                    <div class="col-md-3">
                        <select class="form-select" v-model="form.idTopic">
                            <option v-for="item in topics" :key="item.idTopic" :value="item.idTopic">{{
                                item.idTopic
                            }}, {{ item.name }}</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-outline-success btn-sm btn-block">
                            Buscar
                        </button>
                    </div>
                </div>
            </form>
            <div class="row mt-3">
                <div class="col-md-4">
                    <table v-if="loaded" class="table table-striped table-hover">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Data - Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="item in datas" :key="item.idDataSensor">
                                <tr>
                                    <th>{{ item.idDataSensor }}</th>
                                    <th>{{ item.value }}</th>
                                    <td>{{ item.dataTime }}</td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-8">
                    <Line v-if="loaded" :data="data" :options="options" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import useData from "../data";
import { onMounted } from "vue";
import useTopic from "../../topic/topic";
import { ref } from 'vue';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const { datas, getDatasByTopic } = useData();
const { topics, getTopics } = useTopic();

let labelsArray = [];
let dataArray = [];
let loaded = ref([]);
let idTopic = 0;

onMounted(() => begin())

const form = reactive({
    idTopic: ''
})

const data = {
    labels: labelsArray,
    datasets: [
        {
            label: 'Dados',
            backgroundColor: '#f87979',
            data: dataArray
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false
}

const begin = () => {
    loaded.value = false;
    idTopic =  0;
    getTopics();
}

const getItens = async () => {
    if (!form.idTopic) {
        alert("Escolha uma opção");
        return;
    }
    idTopic = form.idTopic;
    search();
}

const search = async () => {
    clear();
    if (idTopic <= 0) return;
    await getDatasByTopic(idTopic);
    fill();
}

const clear = () => {
    labelsArray.splice(0, labelsArray.length);
    dataArray.splice(0, dataArray.length);
}

const fill = () => {
    const countMax = datas.value.length;
    if (countMax <= 0) { loaded.value = false; return;}

    for (let i = 0; i < countMax; i++) {
        labelsArray.push(datas.value[i].dataTime);
        dataArray.push(datas.value[i].value);
        loaded.value = true;
    }
}

setInterval(search, 10000);

</script>
