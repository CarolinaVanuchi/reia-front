<template>
  <div  v-if="!auth.isAuthenticated.value" class="container py-5 h-100" style="background-color: #1c1c1c; border-radius: 1rem 1rem 1rem 1rem; margin-top: 60px">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5">
              <img src="../../../public/login.jpg" alt="login form" class="img-fluid"
                style="border-radius: 1rem 0 0 1rem" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
                <form @submit.prevent="doLogin">
                  <div class="d-flex mb-3 pb-1">
                    <span class="h1 fw-bold mb-0">Login</span>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="text" id="user_field" class="form-control" v-model="form.username"
                      placeholder="Usuário" />
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="pass_field" class="form-control" placeholder="Senha"
                      v-model="form.password" />
                  </div>

                  <div class="mb-12 d-grid gap-2">
                    <button class="btn btn-outline-dark btn-sm btn-block">
                      Entrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { reactive } from "vue";
import useLogin from "./login";

import useAuth from "./auth";
const auth = useAuth();

const { login } = useLogin();

const form = reactive({
  username: '',
  password: ''
})

const doLogin = async () => {
  if (!form.username || !form.password) {
    alert("Preencher campos de usuário e senha");
    return;
  }
  await login({ username: form.username, password: form.password });
}

</script>
