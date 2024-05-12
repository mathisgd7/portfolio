<script setup>

const props = defineProps(["title", "body", "imageUrl", "imageAlt", "aspectRatio"])

</script>

<template>
  <div class="col mt-2 mb-2">
    <div class="container card h-100">
      <div class="ratio-container mt-2" :style="{'padding-top': aspectRatio}">
        <img :src="imageUrl" :alt="imageAlt" class="card-img-top"/>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <slot></slot>
      </div>

    </div>
  </div>
</template>

<style scoped>
/*
  .card {
    cursor: pointer;
    min-height: 200px;
  }

  .card:hover {
   background-color: var(--bg-custom-color);
   transition: all 0.5s ease-out;
  }

  .card:hover .card-body {
    filter: blur(2px);
  }

  .card:hover .icon-plus {
    opacity: 1;
    transition: all 0.5s ease-out;
  }
*/
  .ratio-container {
    position: relative;
    width: 100%;
    height: 0;
    overflow: hidden;
  }

  .card-img-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
</style>