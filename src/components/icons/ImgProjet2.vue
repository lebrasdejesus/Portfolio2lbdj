<template>
  <div class="height">
    <a href="https://14h02m10s.github.io/TestVue-14h/" target="blank">
      <img src="../../assets/ImgProjet2-NB.jpg" alt="Miniature Projet2 NB" />
      <img
        src="../../assets/ImgProjet2-coul.jpg"
        alt="Miniature Projet2 coul"
      />
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