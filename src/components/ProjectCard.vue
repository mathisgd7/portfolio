<script setup>

const props = defineProps(["title", "body"])

</script>

<template>
  <div class="col-lg-4 mb-4 me-5 project-container">
    <div class="card">
      <i class="icon-plus fa-solid fa-plus"></i>
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ body }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .icon-plus {
    position: absolute;
    z-index: 999;
    top: 50%; /* Déplace l'élément à 50% de la hauteur du parent */
    left: 50%; /* Déplace l'élément à 50% de la largeur du parent */
    transform: translate(-50%, -50%); /* Déplace l'élément de moitié de sa propre taille vers le haut et la gauche, le centrant ainsi */
    font-size: 160px;
    color: #b4b4B4;
    opacity: 0;
  }

  .project-container, .card {
    cursor: pointer;
    width: 500px;
    height: 300px;
  }
 .card:hover {
   background-color: var(--bg-custom-color);
   filter: blur(2px);
   transition: all 0.5s ease-out;
 }

  .card:hover .icon-plus {
    opacity: 0.40;
    transition: all 0.5s ease-out;
  }
</style>