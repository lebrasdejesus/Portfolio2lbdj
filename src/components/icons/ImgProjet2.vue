<template>
  <div class="height">
    <a href="https://14h02m10s.github.io/TestVue-14h/" target="blank">
      <img
        src="../../assets/ImgProjet2-orange.jpg"
        alt="Miniature Projet2 NB"
      />
      <img
        src="../../assets/ImgProjet2-coul.jpg"
        alt="Miniature Projet2 coul"
      />
    </a>
  </div>
</template>
<style scoped>
img {
  /* max-width: 100%; */
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top left;
}
.height {
  position: relative;
  max-height: 15rem;
  overflow: hidden;
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