<!-- <script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script> -->

<template>
  <div class="container1">
    <nav>
      <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      <a href="#heading">Présentation</a>
      <a href="#reals">Réalisations</a>
      <a href="/">Contact</a>
    </nav>
    <div class="container2">
      <div class="deep-blue">
        <div class="container-h1">
          <h1>Frédérique CHAMBINAUD</h1>
        </div>
      </div>
      <div class="blue">
        <h2>
          Concepteur développeur d’applications en alternance avec 3W Academy
        </h2>
        <h3>Contrat de professionnalisation</h3>
        <h3>Rythme : 3 semaines en entreprise / 1 semaine en cours</h3>
      </div>
    </div>
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
}
.container2 {
  display: flex;
  flex-direction: column;
  color: white;
}
nav {
  /* width: 100%; */
  font-size: 1.1rem;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
}
nav a {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: inline-block;
  padding: 0 1rem;
  border-left: 0px solid rgba(33, 157, 178, 0.3);
}

nav a:first-of-type {
  border: 0;
}
h1 {
  font-weight: 800;
  font-size: 1.6rem;
  /* position: relative; */
  padding: 1rem;
}
h2 {
  font-weight: 600;
  font-size: 1.3rem;
  /* position: relative; */
  padding: 0.5rem;
  line-height: 1.2em;
}
h3 {
  font-weight: 500;
  font-size: 1.1rem;
  /* position: relative; */
  padding: 0.1rem;
}
.deep-blue {
  background-color: #219db2;
}
.blue {
  background-color: rgba(33, 157, 178, 0.65);
  padding: 1rem;
}
.container-h1 {
  position: relative;
}

@media (min-width: 471px) {
  nav {
    font-size: 1.1rem;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  nav a {
    font-family: "Montserrat", sans-serif;
    border-left: 1px solid rgba(33, 157, 178, 0.3);
  }
}
@media (min-width: 768px) {
  .container2 {
    display: grid;
    grid-template-columns: 2fr 5fr;
    /* grid-auto-rows: minmax(auto); */
  }
  nav {
    font-size: 1.3rem;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  h1 {
    text-align: left;
    position: absolute;
  }
  h2 {
    font-size: 1.4rem;
    padding: 0.3rem;
  }
  .deep-blue {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container-h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}
</style>
