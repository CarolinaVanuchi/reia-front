<template>
    <div class="user">
        <div class="container-fluid">
            <div class="row" style="margin-top: 30px">
                <hr />
                <h3>Tópicos</h3>
                <hr />
            </div>
            <div class="row">
                <div class="col-md-12">
                    <button class="btn btn-outline-success btn-sm btn-block">
                    <router-link class="nav-link active" to="/create_topic">Cadastrar</router-link>
                    </button>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">

                    <table class="table table-striped table-hover">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Dispositivo</th>
                                <th scope="col">Tópico</th>
                                <th scope="col">GPIO</th>
                                <th scope="col">Tipo de Entrada</th>
                                <th scope="col">Tipo de Saída</th>
                                <th scope="col">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="item in topics" :key="item.idTopic">
                                <tr>
                                    <th>{{ item.idTopic }}</th>
                                    <th>{{ item.idDevice }}</th>
                                    <th>{{ item.topic }}</th>
                                    <td>N: {{ item.gpio }}, {{ (item.gpioInput) ? 'Entrada' : 'Saída'}}</td>
                                    <td>{{ item.typeData }}: {{ item.minValueData }} até {{ item.maxValueData }}</td>
                                    <td>{{ item.typeOutput }}: {{ item.minOutput }} até {{ item.maxOutput }}</td>
                                    <td><button class="btn btn-sm btn-outline-danger"
                                            @click="removeTopic(item.idTopic)">Excluir</button></td>
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

import useTopic from "./topic";
import { onMounted } from "vue";

const { topics, getTopics, deleteTopic } = useTopic();

onMounted(() => getTopics())

const removeTopic = async (id) => {
    if (!window.confirm('Deseja excluir?')) return;

    await deleteTopic(id);
    await getTopics();
}
</script>

