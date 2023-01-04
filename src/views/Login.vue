<template>
  <div class="login">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 ">
                <img src="../../public/login.jpg" alt="login form" class="img-fluid"
                  style="border-radius: 1rem 0 0 1rem;" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form>

                    <div class="d-flex mb-3 pb-1">
                      <span class="h1 fw-bold mb-0">Login</span>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="text" id="user_field" class="form-control form-control-lg" v-model="user"
                        placeholder="Usuário" />
                    </div>

                    <div class="form-outline mb-4">
                      <input type="password" id="pass_field" class="form-control form-control-lg" placeholder="Senha"
                        v-model="pass" />
                    </div>

                    <div class="mb-12 d-grid gap-2">
                      <button class="btn btn-dark btn-lg btn-block" type="button" @click="login">Entrar</button>
                    </div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../services/http.js';

export default {
  data() {
    return {
      user: "",
      pass: ""
    }
  },

  methods: {
    async login() {
      if (!this.user || !this.pass) {
        alert("Preencher campos de usuário e senha");
        return;
      }

      try {
        const { data } = await http.post('auth/login', { username: this.user, password: this.pass })
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    },
  }
}

</script>

<style>
body {
  background-color: #1C1C1C;
}
</style>
