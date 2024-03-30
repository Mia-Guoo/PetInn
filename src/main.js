import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";

//createApp(App).mount("#app");
const app = createApp(App);
app
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyD2etmtqL3jd6mVCfz4HNeoMh4YizLLRGs",
    },
  })
  .mount("#app");
