<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'

</script>
<template>
  <body class="bg-transparent">
    <Header />
    <div class="triangle position-absolute z-n1"/>
    <RouterView/>
  </body>
</template>