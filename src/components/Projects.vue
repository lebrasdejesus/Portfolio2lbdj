<script setup>
// ca marche mais je n'ai pas encore mis la transition sur les blocs textes quand ils s'agrandissent
import ProjectsItem from "./ProjectsItem.vue";
import ImgPortfolio1 from "./icons/ImgPortfolio1.vue";
import ImgLakson from "./icons/ImgLakson.vue";
import ImgProjet2 from "./icons/ImgProjet2.vue";
import ImgSuzuki from "./icons/ImgSuzuki.vue";
</script>


<template>
  <div id="reals">
    <div class="titre">
      <h2 class="title-linear-background">RÉALISATIONS</h2>
    </div>
    <div class="grid-projects flex-project">
      <ProjectsItem data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgPortfolio1 />
        </template>
        <template #sous-titre
          ><a
            href="https://14h02m10s.github.io/Portfolio/"
            target="blank"
            class="link-text"
            >Première version de mon portfolio&nbsp;</a
          ><a href="https://14h02m10s.github.io/Portfolio/" target="blank"
            ><img
              src="../assets/external-orange.svg"
              class="picto-external-link"
              alt="picto-external-link" /></a
        ></template>
        <p>
          Voici la première version de mon portfolio créée avec <b>Vue.js</b>.
          Je n'ai pas eu le temps de le diffuser car dès sa finalisation, j'ai
          sollicité des avis auprès de mon entourage. Certains ont souligné que
          mon site était un peu trop "statique" et avait des airs un peu trop
          "print" (une déformation professionnelle, je suppose ! :p).
          <br /><br /><b
            >C'était mon premier projet responsive, conçu en adoptant une
            approche "mobile first".</b
          >
          Initialement, je souhaitais faire le parallèle avec mon cv, notamment
          en conservant la mise en forme des titres. Cependant, cela s'est avéré
          être plus un problème qu'une solution. La deuxième version de mon
          portfolio (le site que vous parcourez en ce moment) n'est pas parfait,
          bien sûr, mais j'espère que vous pourrez y reconnaître la
          détermination que j'y ai investie.
        </p>
      </ProjectsItem>
      <ProjectsItem data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgLakson />
        </template>
        <template #sous-titre
          ><a
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
              alt="picto-external-link" /></a
        ></template>
        <p>
          Ceci est le projet <b>Vue.js</b> le plus abouti que j'ai réalisé (en
          dehors de ce portfolio + sa 1ère version). J'ai commencé ce projet à
          la fin de mon stage, en juin 2023, et l'ai donc continué chez moi.
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
          Il reste encore des améliorations à apporter, car certaines parties
          étaient assez complexes lorsque j'ai entamé ce projet. Ainsi, les
          animations et la compatibilité avec les appareils de différentes
          tailles (responsive design) n'ont pas encore été implémentées. Mon
          prochain défi sera donc de rendre ce projet pleinement responsive (il
          est pour l'instant conseillé de le regarder sur un écran d'au moins
          1300&nbsp;px de large).
        </p>
      </ProjectsItem>

      <ProjectsItem data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgProjet2 />
        </template>
        <template #sous-titre
          ><a
            href="https://14h02m10s.github.io/TestVue-14h/"
            target="blank"
            class="link-text"
            >Divers exercices en HTML, CSS et JavaScript&nbsp;</a
          ><a href="https://14h02m10s.github.io/TestVue-14h/" target="blank"
            ><img
              src="../assets/external-orange.svg"
              class="picto-external-link"
              alt="picto-external-link" /></a
        ></template>
        <p>
          J'ai décidé de me lancer dans la création de projets en <b>Vue.js</b>,
          afin de renforcer mes compétences en <b>JavaScript</b>. J'ai commencé
          par revisiter des exercices que j'avais fait lors de ma formation chez
          M2i. Par la suite, j'ai enrichi ce projet en y ajoutant divers
          éléments, tels qu'un
          <b
            >sélecteur de couleurs, la possibilité pour l'utilisateur d'ajouter
            des images, et enfin, j'ai reproduit une galerie de photos trouvée
            sur Dribbble</b
          >. <br /><br />En parallèle de ces ajouts, j'ai élaboré une
          présentation comprenant une barre de navigation, des titres, et j'ai
          également intégré un court texte de présentation. Jusqu'à présent,
          j'ai uniquement travaillé sur ce projet en mode desk, ce qui signifie
          qu'il est optimisé pour des écrans d'au moins 1200&nbsp;pixels de
          large. Dans l'avenir, j'aimerai le rendre responsive.
        </p>
      </ProjectsItem>

      <ProjectsItem data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgSuzuki />
        </template>
        <template #sous-titre
          ><a
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
              alt="picto-external-link"
          /></a>
          <!-- <span @click="toggleTexte">&nbsp;↴</span> -->
        </template>
        <p>
          Ce fut mon tout premier projet en <b>Vue.js</b>. Mon maître de stage
          m'avait donné pour mission de reproduire le menu de navigation et le
          slider du
          <a
            href="https://concession.suzuki.fr/la-rochelle"
            target="_blank"
            class="link-text"
            >site Suzuki concession.</a
          >
          <br /><br />
          Il est important de noter que rien n'est cliquable dans ce projet, car
          il s'agit d'une reproduction visuelle. De plus, il n'est pas encore
          pleinement responsive ; il est actuellement adapté aux écrans d'une
          largeur minimale de 960&nbsp;px.
        </p>
      </ProjectsItem>
    </div>
  </div>
</template>

<style scoped>
#reals {
  padding-top: 3rem;
  /* padding-bottom: 3rem; */
  min-height: 100vh;
  /* background-color: #116071; */
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
/* .grid-projects {
  display: grid;
  grid-template-columns: 1fr;
} */
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
/* .title-linear-background {
  background: linear-gradient(
    to bottom,

    #ffffff 55%,
    rgba(255, 255, 255, 0) 80%
  );
  background-clip: text;
  color: transparent;
} */
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
@media (min-width: 471px) {
  #reals:target {
    /* padding-top: 8rem; */
    /* margin-top: -5rem; */
    /* padding-top: 9.056rem;
    margin-top: -3rem; */
  }
}
@media (min-width: 768px) {
  .titre {
    /* margin: 3rem 6rem 2rem 6rem; */
  }
  #reals:target {
    padding-top: 8.5rem;
    margin-top: -5.5rem;
  }
}
@media (min-width: 1135px) {
  #reals {
    /* padding: 3rem 2rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  #reals:target {
    padding-top: 6.8rem;
    margin-top: -3.7rem;
  }
  /* .grid-projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 3rem;
  } */
  .flex-project {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
  h2 {
    font-size: 2.7rem;
    padding: 0.3rem 3rem;
  }
  p {
    font-size: 1rem;
  }
}
@media (min-width: 1440px) {
  .flex-project {
    /* justify-content: space-around; */
    padding: 0 1rem 2rem 1rem;
    margin: 0.5rem 0rem 0rem 0rem;
    width: 100%;
  }
}
</style>