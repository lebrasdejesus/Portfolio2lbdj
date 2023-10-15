<script setup>
import PresentationItem from "./PresentationItem.vue";
import PresentationItemSkills from "./PresentationItemSkills.vue";

const cvURL =
  "https://lebrasdejesus.github.io/Portfolio/cvfchambinaud-public.pdf";
</script>

<template>
  <div class="espace-nav">
    <div id="head">
      <PresentationItem>
        <template #heading>PRÉSENTATION</template>
        <div class="photo-et-texte">
          <div class="photo">
            <img src="../assets/profil-carre-222.jpg" alt="photo profil" />
          </div>
          <div>
            <p>
              Bonjour,<br /><br />je suis ravie de vous accueillir sur mon
              portfolio où mon expérience professionnelle se marie avec ma
              passion naissante pour le développement.
              <b>J'ai en effet travaillé 20 ans, en tant que maquettiste</b>,
              dans diverses entreprises où j'ai perfectionné mon sens du détail,
              ma capacité à faire des délivrables à la fois communiquants,
              harmonieux et respectueux des différentes chartes graphiques.
              <br /><br />Début 2023, j'ai entamé ma reconversion dans l'univers
              du développement. J'ai suivi la
              <b>formation "Développeur .NET fullstack"</b> chez M2i pendant 4
              mois (à temps complet) suivie d'un mois de stage. Bien qu'encore
              débutante, j'ai à cœur de progresser et
              <b>j'apprends tous les jours un peu plus</b>. Mon portfolio est
              justement là pour vous montrer les différents
              <b
                >projets (orientés intégration/front) que j'ai réalisés en juin
                2023, lorsque j'étais en stage</b
              >
              dans ce nouveau domaine, où le graphisme rencontre le code.
              <br /><br />J'ai décidé de continuer mon apprentissage avec la
              <b>3W Academy</b>, au rythme de 3 semaines en entreprise et une
              semaine en cours,
              <b
                >et je recherche donc une entreprise pour un contrat en
                alternance en tant qu'intégratrice et/ou developpeuse
                front-end</b
              >
              sur la métropole Lilloise. N'hésitez pas à me
              <a href="#contact" class="link-text"><b>contacter</b></a>
              si vous pensez que mon profil peut vous intéresser.
            </p>
            <!-- <button class="btn">
              <a :href="cvURL" download="fchambinaud.pdf" target="_blank"
                >Plus de détails sur mon cv</a
              >
            </button> -->
          </div>
        </div>
      </PresentationItem>
      <div class="container-button">
        <!-- <button>
          <a
            href="https://raw.githubusercontent.com/lebrasdejesus/Portfolio/10155ac4d053bbb40de05423900a778f1c3b5b13/src/assets/CV-FCHAMBINAUD.pdf"
            target="_blank"
            >Télécharger mon cv</a
          >
        </button> -->

        <button class="btn">
          <!-- <a href="/cvfchambinaud-public.pdf" target="_blank"
            >Ouvrir mon cv depuis public</a
          > -->
          <!-- <a href="../../public/cvfchambinaud-public.pdf " target="_blank"
            >Ouvrir mon cv depuis public</a
          > -->
          <!-- <a
            href="https://file.notion.so/f/f/3b039082-0e23-4e19-afe1-fa9e5d154c14/4ebe4a50-b97e-417d-966d-9d8e0257121d/CV-F-Chambinaud-Inte-Dev.pdf?id=13ac6315-f309-464d-95c1-350c2b554961&table=block&spaceId=3b039082-0e23-4e19-afe1-fa9e5d154c14&expirationTimestamp=1697479200000&signature=8s2k80MYIcLPK2l6WErmVMnb74ENBhVv-3u_EwnFzVw&downloadName=CV-F-Chambinaud-Inte-Dev.pdf"
            target="_blank"
            >Plus de détails sur mon cv++</a
          > -->
          <a :href="cvURL" target="_blank" download="fchambinaud.pdf"
            >Plus de détails sur mon cv</a
          >
        </button>
        <!-- <button class="btn">Bouton 2</button> -->
        <!-- <button>
          <a href="src/assets/cvfchambinaud.pdf" target="_blank"
            >Voir un autre cv</a
          >
        </button>
        <button>
          <a href="src/assets/Suzuki-NB.jpg" target="_blank">Voir un jpg</a>
        </button>
        <button>
          <a href="../assets/Suzuki-NB.jpg" download>DL un jpg</a>
        </button>
        <button>
          <a href="../assets/cvfchambinaud.pdf" download>DL mon cv++</a>
        </button>
        <button>
          <a href="../assets/cvfchambinaud.pdf" target="_blank"
            >afficher mon cv++</a
          >
        </button> -->
      </div>

      <div class="super-container-hardSkills">
        <div class="container-hardSkills-titre">
          <div class="titre-skills"><h3>Compétences techniques</h3></div>
          <div class="container-two-containers-hard-skills">
            <div class="two-containers-hard-skills margin-bottom">
              <div class="container-hardSkills">
                <PresentationItemSkills>
                  <template #image>
                    <img
                      src="../assets/pictos/HTML5.svg"
                      alt="picto Html"
                      class="height100"
                    />
                  </template>
                  <template #texte><p>HTML 5</p></template>
                </PresentationItemSkills>
                <PresentationItemSkills>
                  <template #image>
                    <img
                      src="../assets/pictos/CSS3_logo.svg"
                      alt="picto Css"
                      class="height100"
                    />
                  </template>
                  <template #texte><p>CSS 3</p></template>
                </PresentationItemSkills>
                <PresentationItemSkills>
                  <template #image>
                    <img
                      src="../assets/pictos/Unofficial_JavaScript_logo_2.svg"
                      alt="picto Js"
                    />
                  </template>
                  <template #texte><p>JavaScript</p></template>
                </PresentationItemSkills>
                <PresentationItemSkills>
                  <template #image>
                    <img
                      src="../assets/pictos/Vuejs_Logo_2.svg"
                      alt="picto Vue"
                    />
                  </template>
                  <template #texte><p>Vue.js</p></template>
                </PresentationItemSkills>
                <PresentationItemSkills>
                  <template #image>
                    <img
                      src="../assets/pictos/React_Logo.svg"
                      alt="picto React"
                    />
                  </template>
                  <template #texte><p>React</p></template>
                </PresentationItemSkills>
                <PresentationItemSkills>
                  <template #image>
                    <img
                      src="../assets/pictos/Tailwind_CSS_Logo.svg"
                      alt="picto Tailwind"
                      class="width100"
                    />
                  </template>
                  <template #texte><p>Tailwind</p></template>
                </PresentationItemSkills>
              </div>
              <div class="container-hardSkills">
                <PresentationItemSkills>
                  <template #image>
                    <img src="../assets/pictos/Figma.svg" alt="picto Figma" />
                  </template>
                  <template #texte><p>Figma</p></template>
                </PresentationItemSkills>
                <PresentationItemSkills>
                  <template #image>
                    <img
                      src="../assets/pictos/Adobe_XD_CC_icon.svg"
                      alt="picto XD"
                      class="height100"
                    />
                  </template>
                  <template #texte><p>Adobe Xd</p></template>
                </PresentationItemSkills>
                <PresentationItemSkills>
                  <template #image>
                    <img
                      src="../assets/pictos/Adobe_InDesign_CC_logo.svg"
                      alt="picto Indesign"
                      class="height100"
                    />
                  </template>
                  <template #texte><p>Adobe Indesign</p></template>
                </PresentationItemSkills>
                <PresentationItemSkills>
                  <template #image>
                    <img
                      src="../assets/pictos/Adobe_Photoshop_CC_icon.svg"
                      alt="picto Photoshop"
                      class="height100"
                    />
                  </template>
                  <template #texte><p>Adobe Photoshop</p></template>
                </PresentationItemSkills>
                <PresentationItemSkills>
                  <template #image>
                    <img
                      src="../assets/pictos/Adobe_Illustrator_CC_icon.svg"
                      alt="picto Illustrator"
                      class="height100"
                    />
                  </template>
                  <template #texte><p>Adobe Illustrator</p></template>
                </PresentationItemSkills>
                <PresentationItemSkills>
                  <template #image>
                    <img
                      src="../assets/pictos/Photopea_logo.svg"
                      alt="picto Photopea"
                    />
                  </template>
                  <template #texte><p>Photopea</p></template>
                </PresentationItemSkills>
              </div>
            </div>
          </div>
        </div>
        <div class="container-hardSkills-titre">
          <div class="titre-skills"><h3>Savoir-être</h3></div>
          <div class="container-hardSkills">
            <ul>
              <li>Réactive</li>
              <li>Rigoureuse</li>
              <li>Créative</li>
              <li>Perséverante</li>
              <li>À l'écoute</li>
              <li>Sens de l'organisation</li>
              <li>Maîtrise avancée du français</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.espace-nav {
  /* margin-top: 11.5rem; */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
}
.super-container-hardSkills {
  display: flex;
  flex-direction: column;
  /* background-color: rgba(13, 122, 136, 0.15); */
  background-color: rgba(57, 122, 137, 0.15);
  margin-bottom: 2rem;
  padding: 2rem 0;
}
.container-hardSkills-titre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
.titre-skills {
  display: flex;
  justify-content: center;
  line-height: 0.7rem;
  margin-bottom: 0.6rem;
  /* color: white; */
}
.container-two-containers-hard-skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.two-containers-hard-skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}
.margin-bottom {
  padding-bottom: 2rem;
}
.container-hardSkills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: fit-content;
}
.container-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}
/* button {
  padding: 0.7rem 1.1rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.1rem;
  border: none;
  box-shadow: inset 0px 0px 10px 3px #26a8bf;
  background: linear-gradient(to bottom, #5bb6c6 5%, #1897a8 100%);
  background-color: #5bb6c6;
  text-shadow: 0px 1px 1px #337985;
  color: white;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
} */

/* test bouton debut */
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
  border: 2px #397a89 solid;
  /* box-shadow: inset 0px 0px 10px 3px #26a8bf; */
  /* background: linear-gradient(to bottom, #5bb6c6 5%, #1897a8 100%); */
  background: none;
  /* text-shadow: 0px 1px 1px #337985; */
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  position: relative;
  /* color: #219db2; */
  color: #397a89;
  overflow: hidden;
}
button::before,
button::after {
  border: #fff 2px solid;
  border-radius: 2rem;
  /* background-color: #219db2; */
  background-color: #116071;
  content: "";
  position: absolute;
  z-index: -1;
  /* border: 4px #ffffff solid; */
}
/* button:hover {
  color: #fff;
} */
button:hover a {
  color: #fff;
}
.btn::before {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
.btn::after {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
.btn:hover::after {
  width: 100%;
}

/* test bouton fin */

/* button:hover::after {
  content: "";
  position: absolute;
  inset: 0;
  top: -1px;
  border: 2px #337985 solid;
  border-radius: 2rem;
  z-index: 1;
} */
/* button:active {
  position: relative;
  top: 1px;
} */
p {
  font-size: 0.9rem;
  text-align: justify;
}

#head:target {
  padding-top: 7rem;
  margin-top: -7rem;
}
.photo-et-texte {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.photo {
  border-radius: 10rem;
  width: 7rem;
  height: 7rem;
}
.photo img {
  width: 7rem;
  border-radius: 10rem;
  border: 2px #116071 solid;
}
.height100 {
  height: 100%;
}
.width100 {
  width: 100%;
}
h3 {
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.1rem;
}
li {
  font-weight: 600;
  padding: 0.2rem;
  list-style-type: none;
}
#head {
  width: 100%;
}
.link-text {
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
}
@media (min-width: 471px) {
  .espace-nav {
    padding-top: 5.5rem;
  }
  #head:target {
    padding-top: 7rem;
    margin-top: -7rem;
  }
}
@media (min-width: 768px) {
  #head:target {
    padding-top: 5.5rem;
    margin-top: -5.5rem;
  }
  .photo-et-texte {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: start;
    /* width: 40rem; */
  }
  .photo {
    width: 8.5rem;
    height: 8.5rem;
    margin-right: 2rem;
  }
  .photo img {
    width: 8.5rem;
  }
  .super-container-hardSkills {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    padding: 2rem 6rem;
  }
  .container-two-containers-hard-skills {
    display: flex;
    flex-direction: row;
  }
  .two-containers-hard-skills {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: left;
  }
  .container-hardSkills-titre {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 1rem 0;
  }
  .container-hardSkills {
    margin: 0 1rem;
  }
  .margin-bottom {
    padding-bottom: 0rem;
  }
}
@media (min-width: 1135px) {
  .espace-nav {
    padding-top: 4rem;
  }
  #head:target {
    padding-top: 4rem;
    margin-top: -4rem;
  }
  .photo-et-texte {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: start;
  }
  .photo {
    width: 12rem;
    height: 12rem;
    margin-right: 3rem;
  }
  .photo img {
    width: 12rem;
  }
  .container-hardSkills-titre {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: left;
    margin: 2rem;
  }
  .container-hardSkills {
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 1rem;
  }
}
</style>