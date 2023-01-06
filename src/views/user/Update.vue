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
          <h4>Alterar</h4>
          <form @submit.prevent="alterUser">

            <div class="row mt-3">
              <input class="form-control" placeholder="Nome" type="text" v-model="userOne.name" />
            </div>
            <div class="row mt-3">
              <input class="form-control" placeholder="Usuário" type="text" v-model="userOne.username" />
            </div>
            <div class="row mt-3">
              <input class="form-control" placeholder="Senha" type="password" v-model="userOne.password" />
            </div>
            <div class="row mt-3">
              <input class="form-control" placeholder="Repita a senha" type="password"
                v-model="userOne.password_repet" />
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

import useUser from "./user";
import { onMounted } from "vue";

const { userOne, getOneUser, updateUser } = useUser();
const props = defineProps({
  id: {
    required: true
  }
});
onMounted(() => getOneUser(props.id))


const alterUser = async () => {
  if (!userOne.value.name || !userOne.value.username || !userOne.value.password || !userOne.value.password_repet) {
    alert('Preencha todos os campos');
    return;
  }

  if (userOne.value.password != userOne.value.password_repet) {
    alert('Senhas devem ser iguais');
    return;
  }
  await updateUser(props.id)
}

</script>

