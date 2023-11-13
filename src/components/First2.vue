<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const scroll = ref(0);
const handleScroll = () => {
  scroll.value = window.scrollY;
  console.log("handle scroll", scroll.value);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
  
  <template>
  <div class="englobeur-first">
    <!-- <div data-scroll-section class="text-photo"> -->
    <div class="text-photo" :style="{ transform: `translateY(-${scroll}px)` }">
      <!-- <div
        class="text"
        data-scroll
        data-scroll-repeat="true"
        data-scroll-speed="2"
      >       -->
      <div class="text">
        <Transition appear name="slide-fade1">
          <div class="bienvenue">BIENVENUE</div>
        </Transition>
        <Transition appear name="slide-fade2">
          <div class="portfolio">sur mon portfolio</div>
        </Transition>
      </div>
      <transition appear name="photo-fade">
        <div class="container-photo" data-scroll data-scroll-speed="-1">
          <img
            src="../assets/profil-carre-222.jpg"
            alt="photo profil"
            class="photo2"
          />
        </div>
      </transition>
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
  /* background-color: #116071; */
  background: linear-gradient(to top, #1c657c, #1c4856 50%, #1c4856 50%);
  min-height: 100vh;
  /* height: 50rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin-top: 3rem; */
  /* background-image: url(../assets/fonds/rain-coming-down-window-1.jpg); */
  /* background-image: url(../assets/fonds/abstract-yellow-light-through-wet-glass.jpg);
  background-color: rgba(17, 96, 113, 0.5);
  background-size: cover;
  background-position: bottom 0px right 0px; */
}
.text-photo {
  gap: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
/* .container-photo {
  height: 14rem;
  width: 14rem;
} */
.photo2 {
  /* border: #e05900 4px solid; */
  border: #e05900 4px solid;
  height: 14rem;
  width: 14rem;
  border-radius: 10rem;
}
.photo-fade-enter-active {
  transition: all 2.3s ease-out;
}
.photo-fade-enter-from {
  opacity: 0;
}
.text {
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 100%; */
  /* justify-content: space-around; */
  gap: 0.8rem;
  border-bottom: #e05900 4px solid;
  padding-top: 1.2rem;
  border-top: #e05900 4px solid;
}
.bienvenue {
  color: #ffffff;
  font-weight: 600;
  font-size: 2.55rem;
  /* text-align: center; */
  line-height: 1rem;
  /* padding: 0.6rem 2rem 0.6rem 3rem; */
  /* transform: translateX(-1rem); */
}
.portfolio {
  color: #ffffff;
  font-weight: 600;
  font-size: 1.75rem;
}
.slide-fade1-enter-active {
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.slide-fade2-enter-active {
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: 0.4s;
}

.slide-fade1-enter-from,
.slide-fade2-enter-from {
  transform: translateX(-10rem);
  opacity: 0;
}
/* .slide-fade1-enter-to,
.slide-fade2-enter-to {
  transform: translateX(-1rem);
} */
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
  /* justify-content: right; */
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
  /* align-items: flex-start; */
  /* background-color: #d35400; */
  background-color: #e05900;
}
@media (min-width: 768px) {
  .englobeur-first {
    padding: 10rem 0;
  }
  .text-photo {
    gap: 8rem;
  }
  .photo2 {
    height: 17rem;
    width: 17rem;
    border-radius: 10rem;
  }
  .text {
    /* gap: 0.8rem; */
    border-bottom: #e05900 4px solid;
    padding-top: 1.7rem;
    border-top: #e05900 4px solid;
  }
  .bienvenue {
    font-size: 3.3rem;
  }
  .portfolio {
    font-size: 2.28rem;
  }
}
@media (min-width: 1135px) {
  .englobeur-first {
    padding: 0;
  }
  .text-photo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-auto-rows: minmax(100px, auto); */
    width: 100%;
    gap: 0;
    padding: 0 4rem;
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1;
    grid-row: 1;
    width: fit-content;
    border-bottom: #e05900 6px solid;
    border-top: #e05900 6px solid;
    margin: auto;
  }
  .container-photo {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .photo2 {
    height: 24rem;
    width: 24rem;
    border-radius: 20rem;
    border: #e05900 6px solid;
  }
  .bienvenue {
    font-size: 5rem;
    /* border-top: #e05900 6px solid; */
    padding-top: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .portfolio {
    padding-top: 1rem;
    font-size: 3.45rem;
    /* border-bottom: #e05900 6px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>