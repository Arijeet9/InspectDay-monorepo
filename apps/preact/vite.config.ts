import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

import { tamaguiExtractPlugin, tamaguiPlugin } from "@tamagui/vite-plugin";
import { createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    // tamaguiPlugin(tamaguiConfig.themeConfig),
    tamaguiPlugin({
      config: '../../packages/config/src/tamagui.config.ts',
      components: ['tamagui','@my/ui'],
      logTimings: true,
      excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker', 'CheckBox', 'Touchable'],
    }),
    // optional, adds the optimizing compiler:
    // process.env.NODE_ENV === "production"
    //   ? tamaguiExtractPlugin(tamaguiConfig.themeConfig)
    //   : null,
  ],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      'react-native': 'react-native-web',
    },
  },
});
