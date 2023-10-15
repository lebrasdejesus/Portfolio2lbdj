<script>
export default {
  data() {
    return {
      isResponsiveMenu: true,
    };
  },
  methods: {
    toggleMenu() {
      this.isResponsiveMenu = !this.isResponsiveMenu;
    },
  },
};
</script>
<template>
  <div class="container1">
    <div class="deep-blue">
      <a href="./"><h1>Frédérique CHAMBINAUD</h1></a>
      <div class="menu-points">
        <a href="javascript:void(0);" class="icon" @click="toggleMenu">
          <img src="../assets/ellypsis-vertical-2.svg" alt="picto menu" />
        </a>
      </div>
    </div>
    <nav
      :class="{ blue: !isResponsiveMenu, responsive: isResponsiveMenu }"
      id="menu-blue"
    >
      <a href="#head" @click="toggleMenu"><p>Présentation</p></a>
      <a href="#reals" @click="toggleMenu"><p>Réalisations</p></a>
      <a href="#contact" @click="toggleMenu"><p>Contact</p></a>
      <div class="picto">
        <a
          href="https://github.com/14h02m10s"
          target="_blank"
          @click="toggleMenu"
        >
          <img src="../assets/pictos/github-blanc.svg" alt="Picto git" />
        </a>
        <a
          href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9rique-c-16195121b/"
          target="_blank"
          @click="toggleMenu"
        >
          <img src="../assets/pictos/linkedin-blanc.svg" alt="Picto linkedin" />
        </a>
      </div>
    </nav>
  </div>
</template>

<style scoped>
* {
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
}
.deep-blue {
  /* background-color: #219db2; */
  background-color: #116071;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.5rem;
  text-align: left;
}
.menu-points {
  height: 1.5rem;
}
.menu-points img {
  height: 1.5rem;
}
nav {
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
}
nav a {
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5rem 0.7rem;
  border-left: 0px solid rgba(33, 157, 178, 0.3);
  color: white;
  transition: 0.4s;
}
nav a p:hover {
  transform: scale(1.03);
  /* text-decoration: underline 2px; */
  /* text-underline-offset: 0.3rem; */
}
h1:hover {
  transform: scale(1.03);
}
nav a:first-of-type {
  border: 0;
}
h1 {
  font-weight: 700;
  font-size: 1.1rem;
  color: white;
}
.picto a {
  padding: 0 0.5rem;
}
.picto img {
  height: 1.8rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
.picto img:hover {
  transform: scale(1.08);
}
.blue {
  /* background-color: #5bb6c6; */
  background-color: #397a89;
  box-shadow: 0px 5px 10px rgba(169, 169, 169, 0.5);
}
.responsive a {
  /* float: none; */
  display: none;
}
@media (min-width: 471px) {
  .container1 {
    box-shadow: 0px 5px 10px rgba(169, 169, 169, 0.5);
  }
  nav {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  nav a {
    padding: 0 0.7rem;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
  }
  .picto img {
    height: 1.2rem;
    margin-top: 0.3rem;
  }
  .menu-points {
    display: none;
  }
  .blue,
  .responsive {
    /* background-color: #5bb6c6; */
    background-color: #397a89;
    box-shadow: 0px 0px 0px rgba(169, 169, 169, 0.5);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }
  .responsive a {
    display: block;
    font-size: 1rem;
  }
  .picto {
    display: flex;
    flex-direction: row;
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
    /* padding: 0.5rem; */
  }
  .blue,
  .responsive {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    padding: 0.9rem;
  }
  .deep-blue {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .responsive a {
    display: block;
    font-size: 1.1rem;
  }
}
</style>
