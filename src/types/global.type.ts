import 'styled-components'
import { type TThemeProps } from './theme.type'

declare module 'styled-components' {
  export interface DefaultTheme extends TThemeProps { }
}
