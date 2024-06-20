import './app.css'
// import { TamaguiProvider, createTamagui } from 'tamagui'
// import { config } from '@tamagui/config/v3'
import { HomeScreen } from 'app/features/home/screen'

import { Provider } from 'app/provider'

// you usually export this from a tamagui.config.ts file
// const tamaguiConfig = createTamagui(config)

// make TypeScript type everything based on your config
// type Conf = typeof tamaguiConfig
// declare module '@tamagui/core' {
//   // or 'tamagui'
//   interface TamaguiCustomConfig extends Conf {}
// }

export function App() {
  return (
    <>
      <Provider disableRootThemeClass>
        <HomeScreen />
      </Provider>
    </>
  )
}
