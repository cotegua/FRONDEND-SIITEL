<template>
  <h1>USUARIO</h1>
  <pre>
  <table class="min-w-full divide-y shadow-md rounded overflow-hidden">
    <thead class="bg-gray-200" >
      <tr >
      <th>NOMUSER</th>
      <th>CLAVE</th>      
      <th>ACCIONES</th>      
    </tr>

    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="us in usuarios" key="us">
        <td class="px-6 py-6 whitespace-nowrap text-sm">{{ us["nomuser"] }}</td>
        <td>{{us["clave"]}}</td>
        <td>
          <button>EDICION</button>
          <button>ELIMINACION</button>

        </td>
      </tr>
    </tbody>
  </table>
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
