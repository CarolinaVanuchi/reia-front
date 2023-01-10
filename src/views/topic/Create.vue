<template>
    <div class="user">
        <div class="container-fluid">
            <div class="row" style="margin-top: 30px">
                <hr />
                <h3>Tópico</h3>
                <hr />
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h4>Cadastrar</h4>

                    <form @submit.prevent="saveTopic">
                        <div class="row mt-3">
                            <div class="col-6">
                                <input class="form-control" placeholder="Nome" type="text" v-model="form.name" />
                            </div>
                            <div class="col-6">
                                <input class="form-control" placeholder="Tópico" type="text" v-model="form.topic" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-6">
                                <select class="form-select" v-model="form.device">
                                    <option v-for="item in devices" :key="item.idDevice" :value="item.idDevice">{{
                                        item.idDevice
                                    }}, {{ item.name }}</option>
                                </select>
                            </div>

                            <div class="col-3">
                                <input class="form-control" placeholder="Gpio" type="number" v-model="form.gpio" />
                            </div>
                            <div class="col-3">
                                <select class="form-select" v-model="form.gpioInput">
                                    <option value="true">Entrada</option>
                                    <option value="false" :key="false">Saída</option>
                                </select>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-6">
                                <select class="form-select" v-model="form.typeData">
                                    <option value="Corrente">Corrente</option>
                                    <option value="Tensão" :key="false">Tensão</option>
                                </select>
                            </div>

                            <div class="col-3">
                                <input class="form-control" placeholder="Menor valor de entrada" type="number"
                                    v-model="form.minValueData" />
                            </div>

                            <div class="col-3">
                                <input class="form-control" placeholder="Maior valor de entrada" type="number"
                                    v-model="form.maxValueData" />
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-6">
                                <select class="form-select" v-model="form.typeOutput">
                                    <option value="Temperatura">Temperatura</option>
                                    <option value="Umidade" :key="false">Umidade</option>
                                </select>
                            </div>

                            <div class="col-3">
                                <input class="form-control" placeholder="Menor valor de conversão" type="number"
                                    v-model="form.minOutput" />
                            </div>

                            <div class="col-3">
                                <input class="form-control" placeholder="Maior valor de conversão" type="number"
                                    v-model="form.maxOutput" />
                            </div>
                        </div>

                        <div class="row mt-3">
                            <button class="btn btn-outline-success btn-sm btn-block">
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

import { reactive } from "vue";
import useTopic from "./topic";
import useDevice from "../device/device";

import { onMounted } from "vue";

const { getTopics, createTopic } = useTopic();
const { devices, getDevices } = useDevice();

onMounted(() => getDevices())

const form = reactive({
    topic: '',
    device: '',
    gpio: '',
    name: '',
    gpioInput: 'true',
    typeData: 'Corrente',
    minValueData: '',
    maxValueData: '',
    typeOutput: 'Temperatura',
    minOutput: '',
    maxOutput: ''
})


const saveTopic = async () => {

    if (!form.name || !form.gpio || !form.gpioInput || !form.topic || !form.device || 
        !form.typeData || form.minValueData == null || form.maxValueData == null  || !form.typeOutput || form.minOutput == null || form.maxOutput == null ) {
        alert("Preencha todos os campos");
        return;
    }

    await createTopic({
        name: form.name,
        gpio: form.gpio,
        gpioInput: form.gpioInput,
        topic: form.topic,
        device: form.device,
        typeData: form.typeData,
        minValueData: form.minValueData,
        maxValueData: form.maxValueData,
        typeOutput: form.typeOutput,
        minOutput: form.minOutput,
        maxOutput: form.maxOutput,
    })
}

</script>