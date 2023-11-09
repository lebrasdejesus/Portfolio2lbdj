<script>
// ca marche mais je n'ai pas encore mis la transition sur les blocs textes quand ils s'agrandissent

export default {
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpansion() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<template>
  <div class="item">
    <div class="img">
      <slot name="image"></slot>
    </div>

    <div class="section-texte" :class="{ expanded: isExpanded }">
      <h4>
        <slot name="sous-titre"></slot>
      </h4>
      <p class="content">
        <slot></slot>
      </p>
      <div class="btn-continue">
        <span
          class="btn-open-text material-symbols-rounded"
          @click="toggleExpansion"
          :class="{ expanded: isExpanded }"
        >
          keyboard_double_arrow_down
        </span>
      </div>
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
  /* margin-top: 1rem; */
  padding: 1rem 0;
  width: 100%;
}
.img {
  width: 100%;
  /* height: fit-content; */
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
  /* align-items: start; */
  /* justify-content: center; */
  align-items: center;
  background-color: #fff;
  /* margin: 0.5rem 0 2rem 0; */
  /* margin: 0 0 2rem 0; */
  padding: 2rem;
  border-top: 5px solid #e05900;
  border-bottom: 5px solid #e05900;
  transform: translateY(-0.4rem);
  height: 15rem;
  overflow: hidden;
  position: relative;
  /* transition: height 0.5s ease-out;  */
}
.section-texte.expanded {
  width: auto;
  height: 100%;
  padding-bottom: 4rem;
}
.btn-continue {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0rem;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.7) 90%,
    rgba(255, 255, 255, 0.2) 100%
  );
  height: 4rem;
  width: 100%;
}
.btn-open-text {
  position: absolute;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */
  /* background-color: #d35400; */
  border-radius: 10rem;
  background-color: #e05900;
  box-shadow: #838e93 0rem 0rem 0.7rem;
  border: #fff 2px solid;
  color: #fff;
  align-items: center;
  cursor: pointer;
  transform: rotate(0deg);
  transition: 0.5s ease-out;
}
.btn-open-text.expanded {
  transform: rotate(180deg);
}

h4 {
  padding: 0 0 0.8rem 0;
  font-weight: 700;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  width: 100%;
}

@media (min-width: 768px) {
  .item {
    /* padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);  */
    /* grid-template-columns: repeat(2, 1fr); */
    /* grid-gap: 1.2rem; */
    /* border: 1px rgba(208, 208, 208, 0.3) solid; */
    /* padding: 1.5rem 6rem; */
    padding: 1.5rem 0rem;
    width: 43rem;
  }
  .img {
    height: fit-content;
  }
}
@media (min-width: 1135px) {
  .item {
    /* grid-gap: 0.2rem; */
    /* border: 1px rgba(208, 208, 208, 0.8) solid; */
    /* margin-top: 1rem; */
    /* padding: 1.5rem 0;
    margin: 0 1rem; */
  }
}
@media (min-width: 1440px) {
  .item {
    /* padding: 1.5rem 0;
    margin: 0 1rem; */
    /* padding: 1rem; */
    margin: 0;
  }
}
</style>