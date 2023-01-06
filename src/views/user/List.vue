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
          <button class="btn btn-outline-success btn-sm btn-block">
            <router-link class="nav-link active" to="/create_user">Cadastro</router-link>
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
                  <td><button class="btn btn-sm btn-outline-warning"> <router-link class="nav-link active"
                        :to="{ name: 'UpdateUser', params: { id: item.idUser } }">Alterar</router-link></button></td>
                  <td><button class="btn btn-sm btn-outline-danger" @click="removeUser(item.idUser)">Excluir</button>
                  </td>
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

import useUser from "./user";
import { onMounted } from "vue";

const { users, getUsers, deleteUser } = useUser();

onMounted(() => getUsers())

const removeUser = async (id) => {
  if (!window.confirm('Deseja excluir')) return;

  await deleteUser(id);
  await getUsers();
}

</script>

