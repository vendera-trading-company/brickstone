import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "brickstone/style-tailwind.css";

import * as brickstone from "brickstone";
import installer from 'brickstone/installer.js';

createApp(App).use(installer, brickstone).mount("#app");
