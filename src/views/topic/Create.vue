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
                            <div class="col-5">
                                <select class="form-select" v-model="form.device">
                                    <option v-for="item in devices" :key="item.idDevice" :value="item.idDevice">{{
                                        item.idDevice
                                    }}, {{ item.name }}</option>
                                </select>
                            </div>

                            <div class="col-5">
                                <input class="form-control" placeholder="Tópico" type="text" v-model="form.topic" />
                            </div>
                            <div class="col-2">
                                <input class="form-control" placeholder="Gpio" type="number" v-model="form.gpio" />
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-3">
                                <select class="form-select" v-model="form.valueData">
                                    <option value="420">4 - 20mA</option>
                                    <option value="010">0 - 10V</option>
                                </select>
                            </div>

                            <div class="col-3">
                                <select class="form-select" v-model="form.typeOutput">
                                    <option value="Temperatura">Temperatura</option>
                                    <option value="Umidade" >Umidade</option>
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
    typeData: 'Corrente',
    valueData: '420',
    minInput: '',
    maxInput: '',
    typeOutput: 'Temperatura',
    minOutput: '',
    maxOutput: ''
})


const saveTopic = async () => {

    if (!form.gpio || !form.topic || !form.device ||
        form.valueData == null || !form.typeOutput || form.minOutput == null || form.maxOutput == null) {
        alert("Preencha todos os campos");
        return;
    }

    switch(form.valueData) {
        case '420':
            form.minInput = 4;
            form.maxInput = 20;
            form.typeData = 'Corrente';
            break;
        case '010':
            form.minInput = 0;
            form.maxInput = 10;
            form.typeData = 'Tensão';
            break;
    }
  
    await createTopic({
        gpio: form.gpio,
        topic: form.topic,
        device: form.device,
        typeData: form.typeData,
        minInput: form.minInput,
        maxInput: form.maxInput,
        typeOutput: form.typeOutput,
        minOutput: form.minOutput,
        maxOutput: form.maxOutput,
    })
}

</script>