<template>
  <div class="englobeur-first">
    <div class="text-photo">
      <div class="text">
        <Transition appear name="slide-fade1">
          <div class="name">Bienvenue</div>
        </Transition>
        <Transition appear name="slide-fade2">
          <div class="name">sur mon portfolio</div>
        </Transition>
      </div>
      <transition appear name="photo-fade">
        <div class="container-photo">
          <img
            src="../assets/profil-carre-222.jpg"
            alt="photo profil"
            class="photo2"
          />
        </div>
      </transition>
      <!-- <div class="vide"></div> -->
    </div>
    <div class="btn-continue">
      <a href="#head">
        <button class="btn-rond">
          <span class="material-symbols-rounded">
            keyboard_double_arrow_down
          </span>
        </button></a
      >
    </div>
  </div>
</template>
<style scoped>
.englobeur-first {
  background-color: #116071;
  /* background: linear-gradient(
    to left,
    #a04a4a,
    #2d9f20 40%,
    #eee 50%,
    #333 50%
  ); */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin-top: 3rem; */
  background-image: url(../assets/fonds/abstract-yellow-light-through-wet-glass.jpg);
  /* background-image: url(../assets/fonds/rain-coming-down-window-1.jpg); */
  background-color: rgba(17, 96, 113, 0.5);
  background-size: cover;
  background-position: bottom 0px right 0px;
}
.text-photo {
  gap: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.container-photo {
  height: 14rem;
  width: 14rem;
}
.photo2 {
  /* border: #e05900 4px solid; */
  border: #e05900 4px solid;
  height: 14rem;
  width: 14rem;
  border-radius: 10rem;
}
.photo-fade-enter-active {
  transition: all 1.5s ease-out;
}
.photo-fade-enter-from {
  opacity: 0;
}
.text {
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  justify-content: space-around;
  gap: 0.7rem;
}
.name {
  /* color: #d35400; */
  color: #e05900;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: right;
  background-color: white;
  border-radius: 0 3rem 3rem 0;
  padding: 0.6rem 2rem 0.6rem 3rem;
  transform: translateX(-1rem);
}
.slide-fade1-enter-active {
  /* transition: all 1s ease; */
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.slide-fade2-enter-active {
  /* transition: all 1s ease; */
  transition: all 1.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: 0.6s;
}

.slide-fade1-enter-from,
.slide-fade2-enter-from {
  transform: translateX(-10rem);
  opacity: 0;
}
.slide-fade1-enter-to,
.slide-fade2-enter-to {
  transform: translateX(-1rem);
}
button,
button::after {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
button {
  padding: 0.7rem 1.1rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.1rem;
  /* border: 2px #219db2 solid; */
  border: 2px #ffffff solid;
  background: none;
  font-weight: 600;
  position: relative;
  /* color: #219db2; */
  color: white;
  overflow: hidden;
  z-index: 1;
}
button::before,
button::after {
  /* border: #fff 2px solid; */
  border-radius: 2rem;
  /* background-color: #219db2; */
  background-color: #397a89;
  content: "";
  position: absolute;
  z-index: -1;
}
button:hover {
  color: #fff;
}
/* button:hover a {
  color: #fff;
} */
.btn-rond::before {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
.btn-rond::after {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
.btn-rond:hover::after {
  width: 100%;
  /* border: rgba(17, 96, 113, 1) 2px solid; */
  /* border: #e05900 2px solid; */
}
.btn-continue {
  display: flex;
  justify-content: right;
  align-items: center;
  position: absolute;
  /* bottom: 1rem; */
  bottom: 2rem;
}
.btn-rond {
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* background-color: #d35400; */
  background-color: #e05900;
}
@media (min-width: 768px) {
  .englobeur-first {
    padding-bottom: 10rem;
  }
  .text-photo {
    gap: 6rem;
  }
  .container-photo {
    height: 17rem;
    width: 17rem;
  }
  .photo2 {
    height: 17rem;
    width: 17rem;
    border-radius: 10rem;
  }
  .name {
    font-size: 1.7rem;
  }
}
@media (min-width: 1135px) {
  .englobeur-first {
    padding-bottom: 0;
  }
  .text-photo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(100px, auto);
    width: 100%;
  }
  .text-photo {
    gap: 0;
  }
  .text {
    /* width: fit-content; */
    display: flex;
    justify-content: flex-start;
    grid-column: 1;
    grid-row: 1;
  }
  .container-photo {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .name {
    font-size: 1.9rem;
  }
}
</style>