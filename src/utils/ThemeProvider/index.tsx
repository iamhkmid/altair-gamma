import React from 'react'
import { type TThemeContext, type TThemeProvider, type TThemeVariant } from '../../types/theme.type'
import { darkColors, lightColors } from '../constants/colors'
import { ThemeProvider as ThemeStylesProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import { breakpoint } from '../constants/breakpoint'

export const ThemeContext = React.createContext<TThemeContext | null>(null)

const ThemeProvider: React.FC<TThemeProvider> = ({ children }) => {
  const [variant, setVariant] = React.useState<TThemeVariant>('dark')

  const themeStyleValue = React.useMemo(() => {
    return {
      variant,
      colors: variant === 'light' ? lightColors : darkColors,
      breakpoint
    }
  }, [variant])

  const themeProviderValue = {
    theme: themeStyleValue,
    variant,
    setVariant
  }

  return (
    <ThemeContext.Provider value={themeProviderValue}>
      <ThemeStylesProvider theme={themeStyleValue}>
        {children}
        <GlobalStyle theme={themeStyleValue} />
      </ThemeStylesProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
