import type React from 'react'

export type TThemeVariant = 'dark' | 'light'
export type TColor11Types = 'rose' | 'orange' | 'slate' | 'blue'
export type TColor5Types = 'primary' | 'text'
export type TColorLevel11 = 'L1' | 'L2' | 'L3' | 'L4' | 'L5' | 'L6' | 'L7' | 'L8' | 'L9' | 'L10' | 'L11'
export type TColorLevel5 = 'L1' | 'L2' | 'L3' | 'L4' | 'L5'
export type TBreakpointType = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

export type TColor11 = Record<TColorLevel11, string>
export type TColor5 = Record<TColorLevel5, string>
export type TColors = Record<TColor11Types, TColor11> & Record<TColor5Types, TColor5>

type TBreakpoint = Record<TBreakpointType, number>

export interface TThemeProvider {
  children: React.ReactNode
}

export interface TThemeProps {
  colors: TColors
  variant: TThemeVariant
  breakpoint: TBreakpoint
}

export interface TThemeContext {
  theme: TThemeProps
  variant: TThemeVariant
  setVariant: React.Dispatch<React.SetStateAction<TThemeVariant>>
}
