import 'styled-components'
import { type TThemeProps } from './theme.type'

declare module 'styled-components' {
  export interface DefaultTheme extends TThemeProps { }
}

export type Unarray<T> = T extends Array<infer U> ? U : T;
