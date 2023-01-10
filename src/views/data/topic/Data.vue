<template>
    <div class="device">
        <div class="container-fluid">
            <div class="row" style="margin-top: 30px">
                <hr />
                <h3>Dados por tópico</h3>
                <hr />
            </div>
            <form @submit.prevent="buscar">
                <div class="row mt-3">
                    <div class="col-md-3" >
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

                    <table class="table table-striped table-hover">
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
                    <Chart />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import useData from "../data";
import { onMounted } from "vue";
import Chart from "../Chart.vue";
import useTopic from "../../topic/topic";

const { datas, getDatas } = useData();
const { topics, getTopics } = useTopic();

onMounted(() => getDatas(), getTopics())
 
let aux = 0;
const form = reactive({
    idTopic: ''
})

const buscar = async () => {
    if (!form.idTopic) {
        alert("Escolha uma opção");
        return;
    }
    aux = form.idTopic;
    await getDatas(form.idTopic);
}
</script>
