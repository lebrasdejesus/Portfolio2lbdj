<!-- <script>
import LocomotiveScroll from "locomotive-scroll";

export default {
  methods: {
    setLocomotiveScroll() {
      new LocomotiveScroll({
        el: this.$refs.container,
        smooth: true,
        multiplier: 5,
      });
    },
  },
  mounted() {
    this.setLocomotiveScroll();
  },
};
</script> -->
<template>
  <main ref="container">
    <section
      className="hello"
      data-scroll
      data-scroll-speed="2"
      data-scroll-section
    >
      <h1>Hello World From Sam</h1>
    </section>

    <section id="sticky" data-scroll-section>
      <h1 data-scroll data-scroll-sticky data-scroll-target="#sticky">
        Sticky scroll example
      </h1>
      <p>Placeholders Placeholders</p>
      <p>Placeholders Placeholders</p>
      <p>Placeholders Placeholders</p>
      <p>Placeholders Placeholders</p>
    </section>

    <section className="parallax" data-scroll-section>
      <h1 data-scroll data-scroll-direction="vertical" data-scroll-speed="9">
        Vertical Parallax scroll
      </h1>
      <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed="9">
        Horizontal Parallax Scroll
      </h1>
    </section>

    <section className="scroll-into-view" data-scroll-section>
      <h1
        className="hint-text"
        data-scroll
        data-scroll-repeat="true"
        data-scroll-class="animate"
        data-scroll-speed="5"
      >
        Here, we're calling the Animate class when the Content scrolls into view
      </h1>
    </section>
  </main>
</template>

<style scoped>
section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: xx-large;
}
.hello {
  background-color: red;
  background-image: url("../assets/background.png");
  color: rgba(0, 0, 0, 0.745);
}
.parallax {
  background-color: greenyellow;
}
#sticky {
  background-color: rgba(137, 43, 226, 0.469);
  padding: 50px;
}
.scroll-into-view {
  background-color: black;
  color: white;
}
</style>