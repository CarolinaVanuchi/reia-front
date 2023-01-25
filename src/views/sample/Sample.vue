<template>
    <div class="user">
        <div class="container-fluid">
            <div class="row" style="margin-top: 30px">
                <hr />
                <h3>Enviar Amostragem</h3>
                <hr />
            </div>
            <div class="row">
                <div class="col-md-12">
                  

                    <form @submit.prevent="send">
                        <div class="row mt-3">

                            <div class="col-9">
                                <input class="form-control" placeholder="Tópico" type="text" v-model="form.topic" />
                            </div>
                            <div class="col-3">
                                <input class="form-control" placeholder="Amostragem em us, Ex: 500000" type="number"
                                    v-model="form.sample" />
                            </div>
                        </div>

                        <div class="row mt-3">
                            <button class="btn btn-outline-success btn-sm btn-block">
                                Enviar
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
import useSample from "./sample";

const { sendSample } = useSample();

const form = reactive({
    topic: '',
    sample: ''
})


const send = async () => {

    if (!form.topic || !form.sample) {
        alert("Preencha todos os campos");
        return;
    }

    await sendSample({
        topic: form.topic,
        sample: form.sample
    });

    form.topic = '';
    form.sample = '';
}

</script>