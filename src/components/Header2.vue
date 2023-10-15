<template>
  <div class="container1">
    <div class="deep-blue">
      <div class="container-h1">
        <a href="./"><h1>Frédérique CHAMBINAUD</h1></a>
      </div>
    </div>
    <nav class="blue">
      <a href="#head"><p>Présentation</p></a>
      <a href="#reals"><p>Réalisations</p></a>
      <a href="#contact"><p>Contact</p></a>
      <div class="picto">
        <a href="https://github.com/14h02m10s" target="blank">
          <img src="../assets/pictos/github-blanc.svg" alt="Picto git"
        /></a>
        <a
          href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9rique-c-16195121b/"
          target="blank"
        >
          <img src="../assets/pictos/linkedin-blanc.svg" alt="Picto linkedin"
        /></a>
      </div>
    </nav>
    <!-- <div class="container2">
      <div class="blue">
        <h2>
          Concepteur développeur d’applications en alternance avec 3W Academy
        </h2>
        <h3>Contrat de professionnalisation</h3>
        <h3>Rythme : 3 semaines en entreprise / 1 semaine en cours</h3>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
* {
  /* margin: 0;
  padding: 0; */
  font-family: "Montserrat", sans-serif;
}
.container1 {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1;
  box-shadow: 0px 5px 10px rgba(169, 169, 169, 0.5);
}
/* .container2 {
  display: flex;
  flex-direction: column;
  color: white;
} */
nav {
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
}
nav a {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  /* display: inline-block; */
  padding: 0 0.2rem;
  border-left: 0px solid rgba(33, 157, 178, 0.3);
  color: white;
  cursor: pointer;
}
nav a p:hover,
h1:hover {
  transform: scale(1.03);
}
nav a:first-of-type {
  border: 0;
}
h1 {
  font-weight: 800;
  font-size: 1.1rem;
  /* position: relative; */
  padding: 0.6rem;
  color: white;
}
.picto a {
  padding: 0 0.5rem;
}
.picto img {
  height: 1.5rem;
  margin-top: 0.3rem;
}
.picto img:hover {
  transform: scale(1.08);
}
.deep-blue {
  background-color: #219db2;
}
.blue {
  /* background-color: rgba(33, 157, 178, 0.65); */
  background-color: #5bb6c6;
}
.container-h1 {
  position: relative;
}

@media (min-width: 471px) {
  nav {
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  nav a {
    border-left: 1px solid rgba(255, 255, 255, 0.3);
  }
  .picto img {
    height: 1.2rem;
    margin-top: 0.3rem;
  }
}
@media (min-width: 768px) {
  .container1 {
    display: grid;
    grid-template-columns: 2fr 5fr;
    color: white;
  }
  nav {
    font-size: 1.3rem;
    padding: 1rem 0;
  }
  h1 {
    font-weight: 700;
    font-size: 1.2rem;
    text-align: left;
    /* position: absolute; */
  }
  .deep-blue {
    display: flex;
    align-items: left;
    justify-content: center;
    padding: 0 0 0 2rem;
  }
  .blue {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    padding: 1rem;
  }
  .container-h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
