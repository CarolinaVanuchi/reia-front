<template>
    <div class="device">
        <div class="container-fluid">
            <div class="row" style="margin-top: 30px">
                <hr />
                <h3>Disposítivos</h3>
                <hr />
            </div>
            <div class="row">
                <div class="col-md-12">
                    <button class="btn btn-outline-success btn-sm btn-block">
                        <router-link class="nav-link active" to="/create_device">Cadastrar</router-link>
                    </button>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">

                    <table class="table table-striped table-hover">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">IP</th>
                                <th scope="col">Porta</th>
                                <th scope="col">Alterar</th>
                                <th scope="col">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="item in devices" :key="item.idDevice">
                                <tr>
                                    <th>{{ item.idDevice }}</th>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.ip }}</td>
                                    <td>{{ item.port }}</td>
                                    <td><button class="btn btn-sm btn-outline-warning"> <router-link
                                                class="nav-link active"
                                                :to="{ name: 'UpdateDevice', params: { id: item.idDevice } }">Alterar</router-link></button>
                                    </td>

                                    <td><button class="btn btn-sm btn-outline-danger"
                                            @click="removeDevice(item.idDevice)">Excluir</button></td>
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
import useDevice from "./device";
import { onMounted } from "vue";

const { devices, getDevices, deleteDevice } = useDevice();

onMounted(() => getDevices())

const removeDevice = async (id) => {
    if (!window.confirm('Deseja excluir?')) return;

    await deleteDevice(id);
    await getDevices();
}
</script>

