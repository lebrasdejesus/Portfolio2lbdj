<template>
  <div class="item">
    <div class="details">
      <!-- <div > -->
      <!-- <h2 class="titre"> -->
      <h2>
        <slot name="heading"></slot>
      </h2>
      <!-- </div> -->
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
  /* padding: 0rem 3rem 0rem 3rem; */
  padding: 0;
}
.details {
  /* flex: 1;
  display: flex;
  flex-direction: column; */
  width: 100%;
}
.titre {
  /* display: flex;
  justify-content: left;
  align-items: center;
  position: relative; */
  /* margin: 0.6rem 3rem 2rem 3rem; */
  /* margin-bottom: 3rem; */
  /* width: fit-content; */
}
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.3rem 3rem;
  /* position: absolute; */
  color: white;
  /* color: #397a89; */
  background-color: #397a89;
  /* background-color: white; */
  border-radius: 0 3rem 3rem 0;
  /* border: 2px #397a89 solid; */
  /* transform: translateX(-2px); */
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  width: fit-content;
  /* margin-bottom: 1rem; */
  box-shadow: 0.6rem 0.6rem #ffffff,
    0.6rem 0.6rem 0.7rem rgba(57, 122, 137, 0.2);
}
/* .texteprez {
  display: flex;
  justify-content: center;
  align-items: center;
} */
@media (min-width: 768px) {
  .item {
    /* padding: 0rem 3rem 0rem 3rem; */
  }

  .texteprez {
    margin: 0 3rem;
  }
}
@media (min-width: 1135px) {
  /* .texteprez {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 47rem;
    margin: auto;
  } */
}
</style>
