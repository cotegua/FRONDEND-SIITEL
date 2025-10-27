<script setup lang="ts"></script>
<template>
  <h1>APP.VUE</h1>

  <nav>
    <router-link to="/"> INICIO </router-link>|
    <router-link to="/nosotros"> ACERCA DE NOSOTROS </router-link>|
    <router-link to="/servicios"> NUESTROS SERVICIOS </router-link>
  </nav>
  <RouterView />
</template>
