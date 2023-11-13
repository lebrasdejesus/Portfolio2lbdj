<script setup>
// import Header4 from "../components/Header4.vue";
import Header5 from "../components/Header5.vue";
import First2 from "../components/First2.vue";
// import testLocomotive from "../components/testLocomotive.vue";
import Presentation2 from "../components/Presentation2.vue";
import Projects from "../components/Projects.vue";
// import Contact from "../components/Contact.vue";
import Contact2 from "../components/Contact2.vue";
// import Footer from "../components/Footer.vue";

// import LocomotiveScroll from "locomotive-scroll";
// import { onMounted } from "vue";

// onMounted(() => {
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
//   });
// });
</script>

<template>
  <!-- <main data-scroll-container> -->
  <main>
    <Header5 />
    <First2 />
    <!-- <testLocomotive /> -->
    <Presentation2 />
    <Projects />
    <Contact2 />
    <!-- <Footer /> -->
  </main>
</template>

<style>
html {
  scroll-behavior: smooth;
  background-color: #e05900;
  /* background-color: blue; */
}

/*rajouter ici le css de locomotive ? */
</style>