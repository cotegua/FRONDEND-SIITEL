<template>
  <h1>{{ titulo }}</h1>
  <Prueba></Prueba>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Prueba from "./views/Prueba.vue";

const titulo = ref("Proyecto de VUE con TypeScript");
</script>

<style>
h1 {
  color: #44a781;
}
h2 {
  color: red;
  font-size: x-large;
}
</style>
