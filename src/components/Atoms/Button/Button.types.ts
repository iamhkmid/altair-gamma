import { type ReactElement } from 'react'
import type React from 'react'

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'text' | 'icon'
  type?: 'button' | 'submit'
  label?: string | null | ReactElement
  fullWidth?: boolean
  disabled?: boolean
  particles?: number
  playAnimationOnMobile?: boolean
  endIcon?: ReactElement | null
}

export interface TParticle {
  key: number
  size: number
  y: number
  x: number
  duration: number
  delay: number
  alpha: number
  originX: string
  originY: string
}
