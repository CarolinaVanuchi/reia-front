<template>
  <div class="user">
    <div class="container-fluid">
      <div class="row" style="margin-top: 30px">
        <hr />
        <h3>Usuários</h3>
        <hr />
      </div>
      <div class="row">
        <div class="col-md-12">
          <h4>Cadastro</h4>

          <form @submit.prevent="saveUser">

            <div class="row mt-3">
              <input class="form-control" placeholder="Nome" type="text" v-model="form.name" />
            </div>
            <div class="row mt-3">
              <input class="form-control" placeholder="Usuário" type="text" v-model="form.username" />
            </div>
            <div class="row mt-3">
              <input class="form-control" placeholder="Senha" type="password" v-model="form.password" />
            </div>
            <div class="row mt-3">
              <input class="form-control" placeholder="Repita a Senha" type="password" v-model="form.password_repet" />
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
import useUser from "./user";


const { createUser } = useUser();
const form = reactive({
  name: '',
  username: '',
  password: '',
  password_repet: ''
})

const saveUser = async () => {
  if (!form.name || !form.username || !form.password || !form.password_repet) {
    alert('Preencha todos os campos');
    return;
  }

  if (form.password != form.password_repet) {
    alert('Senhas devem ser iguais');
    return;
  }
  await createUser({ name: form.name, username: form.username, password: form.password, password_repet: form.password_repet })
}

</script>
