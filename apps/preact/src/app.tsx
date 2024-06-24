import '@tamagui/core/reset.css'
// import '@tamagui/font-inter/css/400.css'
// import '@tamagui/font-inter/css/700.css'
// import '@tamagui/polyfill-dev'

import { Provider } from 'app/provider'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Inspection from './pages/Inspection'
import Leads from './pages/Leads'
import Library from './pages/Library'
import Organization from './pages/Organization'
import Error from './pages/Error'
import HomeLayout from './layouts/HomeLayout'
import { useState } from 'preact/hooks'
import {Dashboard} from "app/features/dashboard/Dashboard"

export function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <Provider disableRootThemeClass defaultTheme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<HomeLayout />}>

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/inspection" element={<Inspection />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/library" element={<Library />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  )
}
