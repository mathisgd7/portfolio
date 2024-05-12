<script setup>
import ProjectCard from "@/components/projects/ProjectCard.vue";
import DynamicDialog from 'primevue/dynamicdialog';
import { useDialog } from 'primevue/usedialog';
import ProjectDetails from "@/components/projects/ProjectDetails.vue";
import Tag from "primevue/tag";

import MeteoWebsiteImage from "@/assets/website-meteo.png"
import Messenger from "@/assets/messenger.png"
import LogoSae from "@/assets/sae-ime-page.png"

const dialog = useDialog();

const showProjectDetails = () => {
  /*
  dialog.open(ProjectDetails, {
    props: {
      modal: true,
    }
  });
  */

}

</script>
<template>
  <div class="container">
    <div class="row">
      <ProjectCard
          @click="showProjectDetails"
          title="Station météo"
          :imageUrl="MeteoWebsiteImage"
          imageAlt="Image site web météo"
          aspectRatio="56.25%"
      >
        <div class="col justify-content-between w-100">
          <Tag class="me-1" style="background-color: var(--php-color); color: white;" rounded>PHP - Symfony</Tag>
          <Tag class="me-1" style="background-color: var(--c-color); color: white;" rounded>C</Tag>
          <Tag class="me-1" style="background-color: var(--iot-color); color: white;" rounded>IoT</Tag>
        </div>
        <p class="mt-2">
          Projet étudiant de <b>station météo</b> permettant de récupérer des informations <b>météorologiques</b> depuis un <b>ESP32</b> pour les afficher sur un site web. Réalisé avec <b>PHP</b> et <b>Symfony</b>.
        </p>
      </ProjectCard>
      <ProjectCard
          @click="showProjectDetails"
          title="Messenger"
          :imageUrl="Messenger"
          imageAlt="Messenger"
          aspectRatio="60%"
      >
        <div class="col justify-content-between w-100">
          <Tag class="me-1" style="background-color: var(--vuejs-color); color: white;" rounded>VueJs</Tag>
          <Tag class="me-1" style="background-color: var(--js-color); color: var(--text-custom-color);" rounded>Express</Tag>
          <Tag class="me-1" style="background-color: var(--iot-color); color: white;" rounded>Websockets</Tag>
        </div>
        <p class="mt-2">
          Projet étudiant de <b>messagerie instantanée</b> permettant de dialoguer en direct avec ses amis. Développé avec <b>Vue.js</b> et <b>Express</b> avec utilisation de <b>Websockets</b>.
        </p>
      </ProjectCard>
      <ProjectCard
          @click="showProjectDetails"
          title="SAE (Suivi d'Apprentissage et d'Évolution)"
          :imageUrl="LogoSae"
          imageAlt="Logo Sae"
          aspectRatio="60%"
      >
        <div class="col justify-content-between w-100">
          <Tag class="me-1" style="background-color: var(--php-color); color: white;" rounded>PHP</Tag>
          <Tag class="me-1" style="background-color: var(--iot-color); color: white;" rounded>HTML/CSS</Tag>
          <Tag class="me-1" style="background-color: var(--js-color); color: var(--text-custom-color);" rounded>JavaScript</Tag>
          <Tag class="me-1" style="background-color: var(--java-color); color: white;" rounded>Java</Tag>
        </div>
        <p class="mt-2">
          Projet tutoré pour la <b>gestion de l'apprentissage</b> dans les instituts médico-éducatifs (IME). Développé pour centraliser les données avec un site web et une application mobile.
        </p>
      </ProjectCard>
    </div>
  </div>
  <DynamicDialog/>
</template>
