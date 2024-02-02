import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "brickstone/dist/style.css";

import * as brickstone from "brickstone";
import installer from 'brickstone/dist/installer';

createApp(App).use(installer, brickstone).mount("#app");
