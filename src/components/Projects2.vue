<script setup>
//tentative d'ouverture des div douce, mais ca ne marche pas car je dois mettre à chaque fois des tailles fixes
//pour les hauteurs et avec le responsive ca ne peut pas marcher du coup... ca fait des ecarts blancs entre
//les titres et les paragraphes
import ProjectsItem2 from "./ProjectsItem2.vue";
import ImgLakson from "./icons/ImgLakson.vue";
import ImgProjet2 from "./icons/ImgProjet2.vue";
import ImgSuzuki from "./icons/ImgSuzuki.vue";
</script>

<script>
export default {
  data() {
    return {
      isExpanded1: false,
      isExpanded2: false,
      isExpanded3: false,
    };
  },
  methods: {
    toggleExpansion1() {
      this.isExpanded1 = !this.isExpanded1;
    },
    toggleExpansion2() {
      this.isExpanded2 = !this.isExpanded2;
    },
    toggleExpansion3() {
      this.isExpanded3 = !this.isExpanded3;
    },
  },
};
</script>

<template>
  <div id="reals">
    <div class="titre">
      <h2 class="title-linear-background">RÉALISATIONS</h2>
    </div>
    <div class="grid-projects flex-project">
      <ProjectsItem2 data-aos="fade-up" data-aos-duration="2000">
        <template #image>
          <ImgLakson />
        </template>
        <template #wrap-text>
          <div class="section-texte" :class="{ expanded1: isExpanded1 }">
            <h4>
              <a
                href="https://14h02m10s.github.io/ExerciceCopieSiteResto/#/"
                target="blank"
                class="link-text"
                >Reproduction d'un site vitrine&nbsp;</a
              ><a
                href="https://14h02m10s.github.io/ExerciceCopieSiteResto/#/"
                target="blank"
                ><img
                  src="../assets/external-orange.svg"
                  class="picto-external-link"
              /></a>
            </h4>
            <p>
              Ceci est le projet <b>Vue.js</b> le plus abouti que j'ai réalisé
              (en dehors de ce portfolio). J'ai commencé ce projet à la fin de
              mon stage, en juin 2023, et l'ai donc continué chez moi.
              L'objectif principal était de reproduire un site vitrine déjà
              existant. Mon choix s'est porté sur
              <a href="https://lakson.fr/" target="_blank" class="link-text"
                >le site du restaurant Lakson,</a
              >
              car il comprenait
              <b
                >une barre de navigation, un pied de page, plusieurs pages, des
                boutons, et une galerie de photos</b
              >. <br /><br />
              Il reste encore des améliorations à apporter, car certaines
              parties étaient assez complexes lorsque j'ai entamé ce projet.
              Ainsi, les animations et la compatibilité avec les appareils de
              différentes tailles (responsive design) n'ont pas encore été
              implémentées. Mon prochain défi sera donc de rendre ce projet
              pleinement responsive (il est pour l'instant conseillé de le
              regarder sur un écran d'au moins 1300&nbsp;px de large).
            </p>
            <div class="btn-continue">
              <span
                class="btn-open-text material-symbols-rounded"
                @click="toggleExpansion1"
                :class="{ expandedBtn: isExpanded1 }"
              >
                keyboard_double_arrow_down
              </span>
            </div>
          </div>
        </template>
      </ProjectsItem2>

      <ProjectsItem2 data-aos="fade-up" data-aos-duration="2000">
        <template #image>
          <ImgProjet2 />
        </template>
        <template #wrap-text>
          <div class="section-texte" :class="{ expanded2: isExpanded2 }">
            <h4>
              <a
                href="https://14h02m10s.github.io/TestVue-14h/"
                target="blank"
                class="link-text"
                >Divers exercices en HTML, CSS et JavaScript&nbsp;</a
              ><a href="https://14h02m10s.github.io/TestVue-14h/" target="blank"
                ><img
                  src="../assets/external-orange.svg"
                  class="picto-external-link"
              /></a>
            </h4>
            <p>
              J'ai décidé de me lancer dans la création de projets en
              <b>Vue.js</b>, afin de renforcer mes compétences en
              <b>JavaScript</b>. J'ai commencé par revisiter des exercices que
              j'avais fait lors de ma formation chez M2i. Par la suite, j'ai
              enrichi ce projet en y ajoutant divers éléments, tels qu'un
              <b
                >sélecteur de couleurs, la possibilité pour l'utilisateur
                d'ajouter des images, et enfin, j'ai reproduit une galerie de
                photos trouvée sur Dribbble</b
              >. <br /><br />En parallèle de ces ajouts, j'ai élaboré une
              présentation comprenant une barre de navigation, des titres, et
              j'ai également intégré un court texte de présentation. Jusqu'à
              présent, j'ai principalement travaillé sur ce projet en mode desk,
              ce qui signifie qu'il est optimisé pour des écrans d'au moins
              1200&nbsp;pixels de large. Dans l'avenir, j'aimerai le rendre
              responsive.
            </p>
            <div class="btn-continue">
              <span
                class="btn-open-text material-symbols-rounded"
                @click="toggleExpansion2"
                :class="{ expandedBtn: isExpanded2 }"
              >
                keyboard_double_arrow_down
              </span>
            </div>
          </div>
        </template>
      </ProjectsItem2>

      <ProjectsItem2 data-aos="fade-up" data-aos-duration="2000">
        <template #image>
          <ImgSuzuki />
        </template>
        <template #wrap-text>
          <div class="section-texte" :class="{ expanded3: isExpanded3 }">
            <h4>
              <a
                href="https://14h02m10s.github.io/ExerciceNavbarEtCarrouselSuzuki/"
                target="blank"
                class="link-text"
                >Reproduction de la navbar et slider du site Suzuki&nbsp;</a
              ><a
                href="https://14h02m10s.github.io/ExerciceNavbarEtCarrouselSuzuki/"
                target="blank"
                ><img
                  src="../assets/external-orange.svg"
                  class="picto-external-link"
              /></a>
            </h4>
            <p>
              Ce fut mon tout premier projet en <b>Vue.js</b>. Mon maître de
              stage m'avait donné pour mission de reproduire le menu de
              navigation et le slider du
              <a
                href="https://concession.suzuki.fr/la-rochelle"
                target="_blank"
                class="link-text"
                >site Suzuki concession.</a
              >
              <br /><br />
              Il est important de noter que rien n'est cliquable dans ce projet,
              car il s'agit d'une reproduction visuelle. De plus, il n'est pas
              encore pleinement responsive ; il est actuellement adapté aux
              écrans d'une largeur minimale de 960&nbsp;px.
            </p>
            <div class="btn-continue">
              <span
                class="btn-open-text material-symbols-rounded"
                @click="toggleExpansion3"
                :class="{ expandedBtn: isExpanded3 }"
              >
                keyboard_double_arrow_down
              </span>
            </div>
          </div>
        </template>
      </ProjectsItem2>
    </div>
  </div>
</template>


<style scoped>
#reals {
  padding-top: 3rem;
  min-height: 100vh;
  background: linear-gradient(to top, #1c657c, #1c4856 50%, #1c4856 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  min-width: none;
}
#reals:target {
  padding-top: 6.1rem;
  margin-top: -3.1rem;
  /* padding-top: 6.1rem; */
  /* margin-top: -6.1rem; */
}
template {
  margin: 0;
  padding: 0;
}
.flex-project {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 0.5rem 1rem 0rem 1rem;
  padding-bottom: 2rem;
}
.titre {
  width: 100%;
  z-index: 1;
  color: #fff;
}

.section-texte {
  /* flex: 1; */
  /* display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center; */
  background-color: #fff;
  /* margin: 0.5rem 0 2rem 0; */
  /* margin: 0 0 2rem 0; */
  display: grid;
  grid-template-rows: 0fr;
  padding: 2rem;
  border-top: 5px solid #e05900;
  border-bottom: 5px solid #e05900;
  transform: translateY(-0.4rem);
  overflow: hidden;
  width: auto;
  height: 15rem;
  position: relative;
  transition: height 0.4s ease-out;
}
.section-texte.expanded1 {
  grid-template-rows: 1fr;
  height: 30rem;
  padding-bottom: 4rem;
}
.section-texte.expanded2 {
  grid-template-rows: 1fr;
  height: 28rem;
  padding-bottom: 4rem;
}
.section-texte.expanded3 {
  grid-template-rows: 1fr;
  height: 18.8rem;
  padding-bottom: 4rem;
}
h2 {
  font-family: "Montserrat", sans-serif;
  /* font-size: 1.2rem; */
  font-weight: 600;
  padding: 0.3rem 3rem;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
}
h4 {
  padding: 0 0 0.8rem 0;
  font-weight: 700;
  font-size: 1.1rem;
  font-family: "Montserrat", sans-serif;
  width: 100%;
}
a {
  color: #e05900;
  margin: 0;
  padding: 0;
  width: 100%;
}
p {
  font-size: 0.9rem;
}
.link-text {
  font-weight: 700;
  /* font-size: 1rem; */
  box-shadow: inset 0 0 0 0 #e05900;
  padding: 0 0.15rem;
  /* margin: 0 -0.25rem; */
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  /* position: relative; */
  /* display: inline; */
}
.link-text:hover {
  color: #fff;
  box-shadow: inset 700px 0 0 0 #e05900;
}
.picto-external-link {
  transform: translateY(0.2rem);
  cursor: pointer;
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
.btn-open-text.expandedBtn {
  transform: rotate(180deg);
}
@media (min-width: 471px) {
  #reals:target {
    /* padding-top: 8rem; */
    /* margin-top: -5rem; */
    padding-top: 9.056rem;
    margin-top: -3rem;
  }
  .section-texte.expanded1 {
    grid-template-rows: 1fr;
    height: 33.7rem;
    padding-bottom: 4rem;
  }
  .section-texte.expanded2 {
    grid-template-rows: 1fr;
    height: 35.4rem;
    padding-bottom: 4rem;
  }
  .section-texte.expanded3 {
    grid-template-rows: 1fr;
    height: 25.3rem;
    padding-bottom: 4rem;
  }
}
@media (min-width: 768px) {
  #reals:target {
    padding-top: 8.5rem;
    margin-top: -5.5rem;
  }
  .section-texte.expanded1 {
    grid-template-rows: 1fr;
    height: 25rem;
    padding-bottom: 4rem;
  }
  .section-texte.expanded2 {
    grid-template-rows: 1fr;
    height: 23.6rem;
    padding-bottom: 4rem;
  }
  .section-texte.expanded3 {
    grid-template-rows: 1fr;
    height: 17.8rem;
    padding-bottom: 4rem;
  }
}
@media (min-width: 1135px) {
  #reals {
    /* padding: 3rem 2rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #reals:target {
    padding-top: 6.8rem;
    margin-top: -3.8rem;
  }

  .flex-project {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  h2 {
    font-size: 2.7rem;
    padding: 0.3rem 3rem;
  }
  p {
    font-size: 1rem;
  }
  .section-texte.expanded1 {
    grid-template-rows: 1fr;
    height: 30rem;
    padding-bottom: 4rem;
  }
  .section-texte.expanded2 {
    grid-template-rows: 1fr;
    height: 28rem;
    padding-bottom: 4rem;
  }
  .section-texte.expanded3 {
    grid-template-rows: 1fr;
    height: 18.8rem;
    padding-bottom: 4rem;
  }
}
@media (min-width: 1440px) {
  .flex-project {
    margin: 0.5rem 0rem 0rem 0rem;
  }
}
</style>