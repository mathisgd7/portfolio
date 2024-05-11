<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import DynamicDialog from 'primevue/dynamicdialog';
import { useDialog } from 'primevue/usedialog';
import ProjectDetails from "@/components/ProjectDetails.vue";

const dialog = useDialog();

const showProjectDetails = () => {
  dialog.open(ProjectDetails, {
    props: {
      modal: true,
    }
  });
}

</script>
<template>
  <div class="container py-5" id="portfolio">
    <h2 class="mb-4">Mes Projets</h2>
    <div class="row">
      <ProjectCard
          @click="showProjectDetails"
          title="Affichage LED dans les communes (entreprise)"
          body="Technologies : IoT, Backend Java, Frontend Vue.js"
      />
      <ProjectCard
          @click="showProjectDetails"
          title="Météo (école)"
          body="Technologies : IoT"
      />
      <ProjectCard
          @click="showProjectDetails"
          title="Messenger (école)"
          body="Technologies : Backend Javascript (Express + Socket.io), Frontend Vue.js"
      />
      <ProjectCard
          @click="showProjectDetails"
          title="Gestion apprentissage IME (école)"
          body="Technologies : Backend PHP, Frontend HTML/CSS/JS, App mobile (Java)"
      />
    </div>
  </div>
  <DynamicDialog/>
</template>
