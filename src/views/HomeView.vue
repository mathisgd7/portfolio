<script setup>
import { onMounted } from 'vue'
import Home from '@/components/Home.vue'
import Projects from "@/components/projects/Projects.vue";
import Contact from "@/components/contact/Contact.vue";
import TitleSeparator from "@/components/TitleSeparator.vue";
import Competences from "@/components/skills/Skills.vue";

</script>

<template>
  <main class="bg-transparent">
    <Home class="bg-transparent"/>
    <TitleSeparator id="skills">Compétences</TitleSeparator>
    <Competences/>
    <TitleSeparator id="projects">Mes projets</TitleSeparator>
    <Projects />
    <TitleSeparator id="contact">Contactez-moi</TitleSeparator>
    <Contact />
  </main>
</template>

<style>

</style>
