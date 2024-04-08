<template>
  <div>
    <!-- En-tête -->
    <header class="header">
      <!-- Contenu de l'en-tête -->
      <div class="header-content">
        <h1>{{ fullName }}</h1>
        <h2>{{ jobTitle }}</h2>
        <p>{{ school }}</p>
        <p>{{ currentStatus }}</p>
      </div>
    </header>

    <!-- Biographie -->
    <section class="bio-section">
      <h2>Biographie</h2>
      <p>
        Bonjour, je suis Mathis GERBOUD, un développeur web fullstack. Actuellement, je suis en alternance chez Atec Electronique tout en poursuivant mes études à l'Université Claude Bernard Lyon 1.
      </p>
      <p>
        Je suis passionné par la création d'applications web et je m'efforce d'apprendre et de perfectionner mes compétences en développement pour fournir des solutions innovantes et efficaces.
      </p>
    </section>
  </div>
  <RouterView />
</template>

<script setup>
import { ref } from 'vue';
import HomeView from "@/views/HomeView.vue";

const fullName = ref('Mathis GERBOUD');
const jobTitle = ref('Développeur Web Fullstack');
const school = ref('Université Claude Bernard Lyon 1');
const currentStatus = ref('Actuellement alternant à Atec Electronique');
</script>

<style scoped>
.header {
  position: relative;
  text-align: center;
  padding: 20px;
  background: url("https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b") no-repeat center center/cover;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-bottom: 200px solid transparent;
  border-top: 500px solid #fff; /* Couleur de fond du triangle */
}

.header-content {
  max-width: 600px;
  margin: auto;
  position: relative; /* Pour que le contenu reste au-dessus du triangle */
  z-index: 1; /* Pour placer le contenu au-dessus du triangle */
}

.bio-section {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 5px;
}

h1, h2 {
  margin-bottom: 10px;
}

p {
  margin-bottom: 15px;
}
</style>
