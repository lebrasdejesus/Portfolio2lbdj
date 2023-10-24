import './assets/main.css'
// import './locomotive-scroll.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Clipboard from "v-clipboard"
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


const app = createApp(App)

app.use(router)
app.use(Clipboard)

app.mount('#app')
