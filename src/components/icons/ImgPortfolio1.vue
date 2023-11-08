<template>
  <div class="height">
    <a href="https://14h02m10s.github.io/Portfolio/" target="blank">
      <img
        src="../../assets/ImgPortfolio1-orange.jpg"
        alt="Miniature Portfolio1 NB"
      />
      <img
        src="../../assets/ImgPortfolio1-coul.jpg"
        alt="Miniature Portfolio1 coul"
      />
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