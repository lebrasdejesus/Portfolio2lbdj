<script setup>
import Header4 from "../components/Header4.vue";
import Presentation from "../components/Presentation.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <main>
    <Header4 />
    <Presentation />
    <Projects />
    <Contact />
    <Footer />
  </main>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>