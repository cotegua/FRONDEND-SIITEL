<template>
  <div class="pt-24 flex justify-center items-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-lg w-lg text-black">
      <h1 class="text-2xl font-semibold text-center mb-6">INGRESAR</h1>
      <pre>{{ respuesta }}</pre>

      <div>
        <label for="em" class="block text-sm font-medium text-gray-700"
          >NOMBRE USUARIO:</label
        >
        <input
          type="text"
          v-model="credenciales.nomuser"
          class="w-full p-3 mt-2 border border-black-800 rounded-md"
        />
        <br />
        <label for="pas">CONTRASEÑA:</label>
        <input
          type="password"
          v-model="credenciales.clave"
          class="w-full p-3 mt-2 border border-black-800 rounded-md"
        />
        <br />
        <button
          class="w-full border p-3 mt-6 bg-blue-600 text-white rounded-md hover:bg-light blue-700 hover:text-black"
          type="button"
          @click="funLogin()"
        >
          INGRESAR
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { loginApiBackend } from "../../services/auth.services";
import { useRouter } from "vue-router";
const credenciales = ref({ nomuser: "", clave: "" });
const respuesta = ref({});
const router = useRouter();

onMounted(() => {
  //funLogin();
});
async function funLogin() {
  try {
    const res = await loginApiBackend(credenciales.value);
    console.log(res);
    respuesta.value = res;
    //localStorage.setItem("access_token", res.access_token);
    router.push("/admin/usuario");
  } catch (error) {
    alert("Error al Intentar Iniciar Sessión");
  }
}
</script>
