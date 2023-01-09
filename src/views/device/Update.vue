<template>
  <div class="user">
    <div class="container-fluid">
      <div class="row" style="margin-top: 30px">
        <hr />
        <h3>Disposítivo</h3>
        <hr />
      </div>
      <div class="row">
        <div class="col-md-12">
          <h4>Alterar</h4>

          <form @submit.prevent="alterDevice">

            <div class="row mt-3">
              <input class="form-control" placeholder="Nome" type="text" v-model="deviceOne.name" />
            </div>
            <div class="row mt-3">
              <input class="form-control" placeholder="IP" type="text" v-model="deviceOne.ip" />
            </div>
            <div class="row mt-3">
              <input class="form-control" placeholder="Porta" type="number" v-model="deviceOne.port" />
            </div>
            <div class="row mt-3">
              <input class="form-control" placeholder="Amostragem" type="number" v-model="deviceOne.sample" />
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

import useDevice from "./device";
import { onMounted } from "vue";

const { deviceOne, getOneDevice, updateDevice } = useDevice();

const props = defineProps({
  id: {
    required: true
  }
});

onMounted(() => getOneDevice(props.id))

const alterDevice = async () => {
  if (!deviceOne.value.name || !deviceOne.value.ip || !deviceOne.value.port || !deviceOne.value.sample) {
    alert("Informe todos os campos");
    return;
  }

  await updateDevice(props.id);

}

</script>
