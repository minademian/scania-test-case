import { Config } from "@stencil/core";
import { postcss } from "@stencil-community/postcss";
import {
  angularOutputTarget,
  ValueAccessorConfig,
} from "@stencil/angular-output-target";
import autoprefixer from "autoprefixer";

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: "scania-fleetportal-dropdown",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: "@web-components/dist/components",
      directivesProxyFile:
        "./../../src/libs/scania-fleetportal-dropdown/proxies.ts",
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
};
