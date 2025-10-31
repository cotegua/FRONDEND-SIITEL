<template>
  <h1>USUARIO</h1>
  <pre>
  {{ usuarios }}
  </pre>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as userService from "./../../../services/user.services";

const usuarios = ref({});
onMounted(() => {
  ListarUsuarios();
});
async function ListarUsuarios() {
  try {
    //const { data } = await userService.listarApiUsuario();
    //usuarios.value = data;
    const respuesta = await userService.listarApiUsuario();
    usuarios.value = respuesta.data;
  } catch (error) {
    console.log(error);
  }
}
</script>
