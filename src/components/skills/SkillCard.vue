<script setup>
const props = defineProps(["title", "icon"])
</script>

<template>
  <div class="col mt-2 mb-2">
    <div class="container card h-100">
      <div class="card-body text-center">
        <i class="fa-3x mb-2" :class="icon"></i>
        <p class="card-text">{{ title }}</p>
      </div>
    </div>
  </div>
</template>
