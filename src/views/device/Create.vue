<template>
    <div class="user">
      <div class="container-fluid">
        <div class="row" style="margin-top: 30px">
          <hr />
          <h3>Dispositivo</h3>
          <hr />
        </div>
        <div class="row">
          <div class="col-md-12">
            <h4>Cadastrar</h4>
  
            <form @submit.prevent="saveDevice">
  
              <div class="row mt-3">
                <input class="form-control" placeholder="Nome" type="text" v-model="form.name" />
              </div>
              <div class="row mt-3">
                <input class="form-control" placeholder="IP" type="text" v-model="form.ip" />
              </div>
              <div class="row mt-3">
                <input class="form-control" placeholder="Porta" type="number" v-model="form.port" />
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
    import useDevice from "./device";

    const { createDevice } = useDevice();
    
    const form = reactive({
        name: '',
        ip: '',
        port: ''
    })

    const saveDevice = async () => {
        if (!form.name || !form.ip || !form.port) {
            alert("Informe todos os campos");
            return;
        }

        await createDevice({ name: form.name, ip: form.ip, port: form.port});
    }
  
  </script>
  