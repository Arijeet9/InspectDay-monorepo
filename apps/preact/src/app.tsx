// import { TamaguiProvider, createTamagui } from 'tamagui'
// import { config } from '@tamagui/config/v3'

import { Provider } from 'app/provider'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Inspection from './pages/Inspection'
import Leads from './pages/Leads'
import Library from './pages/Library'
import Organization from './pages/Organization'
import Error from './pages/Error'

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
      <Provider disableRootThemeClass defaultTheme="dark">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/inspection" element={<Inspection />} />
                <Route path="/leads" element={<Leads />} />
                <Route path="/library"  element={<Library />} />
                <Route path="/organization"  element={<Organization />} />
                <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </Provider>
    </>
  )
}
