<template>
    <div class="device">
        <div class="container-fluid">
            <div class="row" style="margin-top: 30px">
                <hr />
                <h3>Dados por Disposítivo</h3>
                <hr />
            </div>
            <form @submit.prevent="getItens">
                <div class="row mt-3">
                    <div class="col-md-8">
                        <select class="form-select" v-model="form.idDevice">
                            <option v-for="item in devices" :key="item.idDevice" :value="item.idDevice">{{
                                item.idDevice
                            }}, {{ item.name }}, {{ item.ip }}:{{ item.port }}</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-outline-success btn-sm btn-block">
                            Buscar
                        </button>
                    </div>
                </div>
            </form>
            <div class="row mt-3">
                <div class="col-md-12">

                    <table v-if="datas.length > 0" class="table table-striped table-hover">
                        <thead class="table-dark">
                            <tr>
                                <th>Tópico</th>
                                <th>Sensor</th>

                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="item in datas" :key="item.idTopic">
                                <tr>
                                    <td><b>Id:</b> {{ item.idTopic }} <b>Nome:</b>  {{ item.name }} <b>Tópico:</b>  {{ item.topic }}</td>

                                    <div v-for="values in item.data_sensors">
                                        <td>
                                            <b>Valor:</b> {{ values.value }} {{  item.typeOutput }} <b>Data:</b> {{ values.dataTime }}
                                        </td>
                                    </div>

                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { reactive } from "vue";
import useData from "../data";

import { onMounted } from "vue";
import useDevice from "../../device/device";

const { datas, getDatasByDevice } = useData();
const { devices, getDevices } = useDevice();

let idDevice = 0;

onMounted(() => getDevices())

const form = reactive({
    idDevice: ''
})

const getItens = async () => {
    if (!form.idDevice) {
        alert("Escolha uma opção");
        return;
    }

    idDevice = form.idDevice;
    search();
}

const search = async () => {
    if (idDevice <= 0) return;
    await getDatasByDevice(idDevice);
}


setInterval(search, 10000);

</script>
