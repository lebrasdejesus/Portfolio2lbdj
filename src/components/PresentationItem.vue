<template>
  <div class="item">
    <div class="details">
      <div class="titre">
        <h3>
          <slot name="heading"></slot>
        </h3>
      </div>
      <div class="texteprez">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  /* margin-top: 1rem; */
  display: flex;
  position: relative;
  padding: 3rem 3rem 0rem 3rem;
}
.details {
  /* flex: 1;
  display: flex;
  flex-direction: column; */
  width: 100%;
}
.titre {
  /* background-color: #219db2; */
  background-color: #397a89;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.7rem;
  position: relative;
  /* margin: 0.6rem 3rem 2rem 3rem; */
  margin-bottom: 2.5rem;
  /* width: 100%; */
}
h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: rgb(255, 255, 255);
  padding: 0rem 0.7rem;
  position: absolute;
}
/* .texteprez {
  display: flex;
  justify-content: center;
  align-items: center;
} */
@media (min-width: 768px) {
  .item {
    padding: 3rem 6rem 0rem 6rem;
  }
  /* .details {
    display: flex;
    justify-content: center;
    align-items: center;
  } */
  /* .texteprez {
    margin: 0 3rem;
  } */
}
@media (min-width: 1135px) {
  .texteprez {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 47rem;
    margin: auto;
  }
}
</style>
