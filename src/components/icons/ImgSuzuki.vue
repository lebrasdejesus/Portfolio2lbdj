<template>
  <div class="height">
    <a
      href="https://14h02m10s.github.io/ExerciceNavbarEtCarrouselSuzuki/"
      target="blank"
    >
      <img src="../../assets/Suzuki-NB.jpg" alt="Miniature Suzuki NB" />
      <img src="../../assets/Suzuki-coul.jpg" alt="Miniature Suzuki coul" />
    </a>
  </div>
</template>
<style scoped>
img {
  max-width: 100%;
}
.height {
  position: relative;
}
.height img:nth-child(2) {
  position: absolute;
  right: 0;
  opacity: 0;
  transition: opacity ease 0.4s;
  cursor: pointer;
}
.height:hover img:nth-child(2) {
  opacity: 1;
  cursor: pointer;
}
</style>