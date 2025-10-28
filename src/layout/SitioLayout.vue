<script setup lang="ts">
import Menu from "../components/sitio-layout/menu.vue";
</script>
<template>
  <div
    class="leading-normal tracking-normal text-white gradient"
    style="font-family: 'Source Sans Pro', sans-serif"
  >
    <!--Nav-->
    <Menu></Menu>
    <RouterView></RouterView>
    <!--Hero-->
  </div>
</template>
<style scoped>
.gradient {
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}
</style>
