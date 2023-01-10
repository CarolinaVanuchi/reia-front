<template>
    <div class="device">
        <div class="container-fluid">
            <div class="row" style="margin-top: 30px">
                <hr />
                <h3>Sensores</h3>
                <hr />
            </div>
            <div class="row mt-3">
                <div class="col-md-6">

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
                <div class="col-md-6">
                <Chart />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import useData from "./data";
import { onMounted } from "vue";
import Chart from "./Chart.vue";

const { datas, getDatas } = useData();

onMounted(() => getDatas())

</script>
