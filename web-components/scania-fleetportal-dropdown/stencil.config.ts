import { Config } from "@stencil/core";

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from "@stencil/angular-output-target";

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
      serviceWorker: null,
    },
    angularOutputTarget({
      componentCorePackage:
        "@web-components/scania-fleetportal-dropdown/dist/components",
      directivesProxyFile:
        "./../../src/libs/scania-fleetportal-dropdown/proxies.ts",
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  plugins: [],
};
