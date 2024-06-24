// import { useState } from 'react'
// import { Button, useIsomorphicLayoutEffect } from 'tamagui'
// import { useThemeSetting, useRootTheme } from '@tamagui/next-theme'

// export const SwitchThemeButton = () => {
//   const themeSetting = useThemeSetting()
//   const [theme] = useRootTheme()

//   const [clientTheme, setClientTheme] = useState<string | undefined>('light')

//   useIsomorphicLayoutEffect(() => {
//     setClientTheme(themeSetting.forcedTheme || themeSetting.current || theme)
//   }, [themeSetting.current, themeSetting.resolvedTheme])

//   return <Button onPress={themeSetting.toggle}>Change theme: {clientTheme}</Button>
// }

import { useState } from 'react'
import { Button, useIsomorphicLayoutEffect } from 'tamagui'
import { useThemeHook } from 'app/context/CustomThemeContext'

export const SwitchThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useThemeHook()
  const [clientTheme, setClientTheme] = useState<string>('light')

  useIsomorphicLayoutEffect(() => {
    setClientTheme(theme)
  }, [theme])

  return <Button onPress={toggleTheme}>Change theme: {clientTheme}</Button>
}
