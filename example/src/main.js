import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "brickstone/dist/style.css";
import installer from "./installer";

createApp(App).use(installer).mount("#app");
