<script setup>
const isInvisible = ref(true);

const toggleTexte = () => {
  isInvisible.value = !isInvisible.value;
};
</script>

<template>
  <div class="item">
    <div class="img">
      <slot name="image"></slot>
    </div>

    <div
      class="section-texte"
      :class="{ visible: !isInvisible, retracte: isInvisible }"
    >
      <h4>
        <slot name="sous-titre"></slot>
        <slot name="fleche" @click="toggleTexte"></slot>
      </h4>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>
  
  <style scoped>
.item {
  /* display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0; */
  display: flex;
  flex-direction: column;
  margin: 0;
  /* border: 1px rgba(208, 208, 208, 0.8) solid; */
  /* margin-top: 1rem; */
  padding: 0.5rem 1.5rem;
}
.img {
  width: 100%;
  /* height: fit-content; */
  /* border: 1px purple dashed; */
  /* display: block; */
  margin: 0;
  padding: 0;
}
/* .details {
  flex: 1;
  margin-top: 0.8rem;
} */
.section-texte {
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: #fff;
  /* margin: 0.5rem 0 2rem 0; */
  margin: 0 0 2rem 0;
  padding: 2rem;
  border-top: 5px solid #e05900;
  border-bottom: 5px solid #e05900;
  transform: translateY(-0.4rem);
}
.retracte {
  height: 10rem;
  overflow: hidden;
}
.visible {
  height: fit-content;
}
h4 {
  padding: 0 0 0.8rem 0;
  font-weight: 700;
  font-size: 1.1rem;
  font-family: "Montserrat", sans-serif;
}
/* h4:after {
  content: " ↴";
  color: #e05900;
} */

@media (min-width: 768px) {
  .item {
    /* padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);  */
    /* grid-template-columns: repeat(2, 1fr); */
    /* grid-gap: 1.2rem; */
    /* border: 1px rgba(208, 208, 208, 0.3) solid; */
    padding: 1.5rem 6rem;
    /* max-width: 40rem; */
  }
  .img {
    height: fit-content;
  }
  .section-texte {
    /* margin-top: 0; */
    /* max-width: 70%; */
    /* transform: translateY(0); */
  }
}
@media (min-width: 1135px) {
  .item {
    /* grid-gap: 0.2rem; */
    /* border: 1px rgba(208, 208, 208, 0.8) solid; */
    /* margin-top: 1rem; */
    padding: 1.5rem 2rem;
    max-width: 40rem;
  }
  h4:after {
    content: "";
  }
  .section-texte:hover {
    height: fit-content;
  }
}
</style>