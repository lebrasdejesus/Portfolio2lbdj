<template>
  <div class="item">
    <div class="img">
      <slot name="image"></slot>
    </div>

    <div class="details">
      <h3>
        <slot name="texte" class="link-text"></slot>
      </h3>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>
  
  <style scoped>
.item {
  display: grid;
  grid-template-columns: 1fr;
  /* grid-gap: 0.2rem; */
  /* border: 1px rgba(208, 208, 208, 0.8) solid; */
  /* margin-top: 1rem; */
  padding: 1.5rem 3rem;
}
.img {
  width: 100%;
  height: fit-content;
  /* border: 1px purple dashed; */
  display: block;
}
.details {
  flex: 1;
  /* margin: 0 1rem 0 1rem; */
  margin-top: 0.8rem;
}
h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  /* border: 1px black solid; */
}
/* .link-text {
  font-weight: 600;
  font-size: 1rem;
  box-shadow: inset 0 0 0 0 #116071;
  padding: 0 0.25rem;
  margin: 0 -0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.link-text:hover {
  color: #fff;
  box-shadow: inset 200px 0 0 0 #116071;
} */

@media (min-width: 768px) {
  .item {
    /* padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);  */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-columns: 1fr 2fr; */
    grid-gap: 1.2rem;
    /* border: 1px rgba(208, 208, 208, 0.3) solid; */
    padding: 1.5rem 6rem;
  }
  .details {
    margin-top: 0;
  }
}
@media (min-width: 1135px) {
  .item {
    display: grid;
    grid-template-columns: 1fr;
    /* grid-gap: 0.2rem; */
    /* border: 1px rgba(208, 208, 208, 0.8) solid; */
    /* margin-top: 1rem; */
    padding: 1.5rem 3rem;
  }
}
</style>