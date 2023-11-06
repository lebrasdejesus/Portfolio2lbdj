<template>
  <!-- tentative d'ouverture des div douce, mais ca ne marche pas car je dois mettre à chaque fois des tailles fixes
pour les hauteurs et avec le responsive ca ne peut pas marcher du coup... ca fait des ecarts blancs entre
les titres et les paragraphes -->
  <div class="item">
    <div class="img">
      <slot name="image"></slot>
    </div>

    <slot name="wrap-text"> </slot>
  </div>
</template>

  <style scoped>
.item {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0.5rem 0;
  width: 100%;
}
.img {
  width: 100%;
  margin: 0;
  padding: 0;
}

@media (min-width: 768px) {
  .item {
    padding: 1.5rem 0rem;
    width: 44rem;
  }
  .img {
    height: fit-content;
  }
}
@media (min-width: 1135px) {
  .item {
    padding: 1.5rem 0;
    margin: 0 1rem;
  }
}
</style>