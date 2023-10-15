<template>
  <nav>
    <div class="deep-blue">
      <h1>Frédérique Chambinaud</h1>
      <label for="toggle">☰</label>
      <input type="checkbox" id="toggle" />
      <div class="main_pages">
        <a href="#">Accueil</a>
        <a href="#">Actualité</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
* {
  /* margin: 0;
  padding: 0; */
  font-family: "Montserrat", sans-serif;
}
nav {
  /* margin: 100px auto; */
  /* width: 50%; */
  height: 3rem;
  background: #48435c;
  color: rgb(187, 116, 116);
}
.deep-blue {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 1rem;
}
h1 {
  font-size: 1.2rem;
}
nav .main_pages {
  display: flex;
  flex-direction: column;
  background: #715cc6;
  /* height: 10rem; */
  transform: translate(6rem, 0);
}
nav .main_pages a {
  /* width: 20%; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  height: 2rem;
  text-decoration: none;
  color: white;
}

nav a:hover {
  background: #5a5766;
}
label {
  width: 2rem;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: 0 auto;
  font-size: 40px;
  color: rgb(255, 0, 0);
  cursor: pointer;
}
#toggle:checked + .main_pages {
  transform: translate(-10rem, 0);
}
@media (min-width: 471px) {
  nav {
    height: 6rem;
  }
  nav .main_pages {
    display: flex;
    flex-direction: column;
    height: 220px;
  }
  /* nav .main_pages a {
    width: 50%;
  } */
  label {
    display: none;
  }
  label,
  #toggle {
    display: none;
  }
}
</style>
