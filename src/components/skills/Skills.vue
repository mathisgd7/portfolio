<script setup>
import SkillCard from "@/components/skills/SkillCard.vue";

const skills = [
  { title: "Vue.js", icon: "fab fa-vuejs" },
  { title: "Git", icon: "fab fa-git" },
  { title: "SQL - MariaDB - MongoDB", icon: "fas fa-database" },
  { title: "Docker", icon: "fab fa-docker" },
  { title: "Java", icon: "fab fa-java" },
  { title: "HTML", icon: "fab fa-html5" },
  { title: "CSS", icon: "fab fa-css3-alt" },
  { title: "JavaScript", icon: "fab fa-js" }
];
</script>

<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      <SkillCard v-for="(skill, index) in skills" :key="index" :title="skill.title" :icon="skill.icon"/>
    </div>
  </div>
</template>
