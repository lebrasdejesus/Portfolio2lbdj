import './assets/main.css'
// import './locomotive-scroll.min.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Clipboard from "v-clipboard"
// import LocomotiveScroll from "locomotive-scroll";

// export default {
//     methods: {
//         setLocomotiveScroll() {
//             new LocomotiveScroll({
//                 el: this.$refs.container,
//                 smooth: true,
//                 multiplier: 5,
//             });
//         },
//     },
//     mounted() {
//         this.setLocomotiveScroll();
//     },
// };

// import ScrollAnimation from './directives/scrollanimation'

import { MotionPlugin } from '@vueuse/motion'
import AOS from "aos"
import "aos/dist/aos.css"

const app = createApp(App)

app.use(router)
app.use(Clipboard)
app.use(MotionPlugin)
AOS.init();
app.mount('#app')
/*
 Register the object here globally as directive,
 similar if you register a component.
 But now with Vue.directive, instead of component.
 With this you can use v-scrollanimation
 in your whole application on each element.
*/
// Vue.directive('scrollanimation', ScrollAnimation);
