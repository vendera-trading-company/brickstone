import _ from "lodash";
import * as brickstone from "brickstone";
export default {
  install(app) {
    Object.entries(brickstone).forEach(([path, m]) => {
      const name = "bs-" + _.kebabCase(path);

      const component = m.default ?? m;

      app.component(`${name}`, component);
    });
  },
};
