<template>

    <nav v-if="auth.isAuthenticated.value" class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Reia</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/data_topic">Dados por tópico</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/data_device">Dados por disposítivos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/sample">Enviar Amostragem</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/device">Disposítivos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/topic">Tópicos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/user">Usuário</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-sm btn-outline-info" type="button" @click="logout">Sair</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script setup>

import useAuth from "../store/auth";
import { onUpdated } from "vue";
const auth = useAuth();

function logout()
{
    auth.clearLocalStorage();
}
</script>
<style>

</style>