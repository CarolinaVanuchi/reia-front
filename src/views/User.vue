<template>
  <div class="user">
    <div class="container-fluid">
      <div class="row" style="margin-top: 30px">
        <hr />
        <h3>Usuários</h3>
        <hr />
      </div>
      <div class="row">
        <div class="col-md-5">
          <h2>Cadastro</h2>
          <form @submit.prevent="addUser">
         
            <div class="row mt-3">
              <input class="form-control" placeholder="Nome" type="text" />
            </div>
            <div class="row mt-3">
              <input class="form-control" placeholder="Usuário" type="text" />
            </div>
            <div class="row mt-3">
              <input class="form-control" placeholder="Senha" type="password" />
            </div>
            <div class="row mt-3">
              <button class="btn btn-outline-dark btn-sm btn-block">
                Salvar
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-6">
          <h2>Lista</h2>
          <table class="table table-striped">
            <thead class="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Usuário</th>
                <th scope="col">Alterar</th>
                <th scope="col">Excluir</th>
              </tr>
            </thead>
            <tbody>
            <template v-for="item in users" :key="item.idUser">
              <tr>
                <th>{{ item.idUser }}</th>
                <td>{{ item.name }}</td>
                <td>{{ item.username }}</td>
                <td><button class="btn btn-sm btn-outline-danger" @click="removeUser(item.idUser)">Excluir</button></td>
                <td>@mdo</td>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import useUser  from "../function/user";
import { onMounted } from "vue";

export default {
  setup() {
    const {users, getUsers, deleteUser} = useUser();

    onMounted(getUsers);

    const removeUser = async (id) => {
      if(!window.confirm('Deseja excluir')) return;

      await deleteUser(id);
      await getUsers();
    }
    return {
      users,
      removeUser
    }
  }
}

</script>

<style></style>
