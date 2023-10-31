<template>
  <div class="height">
    <a
      href="https://14h02m10s.github.io/ExerciceCopieSiteResto/#/"
      target="blank"
    >
      <img src="../../assets/Lakson-orange.jpg" alt="Miniature Lakson NB" />
      <img src="../../assets/Lakson-coul.jpg" alt="Miniature Lakson coul" />
      <!-- <img src="../../assets/Suzuki-coul.jpg" alt="Miniature Lakson coul" /> -->
    </a>
  </div>
</template>
<style scoped>
.height {
  position: relative;
  margin: 0;
  padding: 0;
  /* height: fit-content; */
  max-height: 15rem;
  overflow: hidden;
}
img {
  /* max-width: 100%; */
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top left;
}
.height img:nth-child(2) {
  position: absolute;
  right: 0;
  opacity: 0;

  transition: opacity ease 0.4s;
}
.height:hover img:nth-child(2) {
  opacity: 1;
  cursor: pointer;
}
a {
  margin: 0;
  padding: 0;
  line-height: 0rem;
}
</style>