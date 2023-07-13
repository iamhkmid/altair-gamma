import React from 'react'
import { styled } from 'styled-components'
import { type TThemeContext } from '../../types/theme.type'
import { ThemeContext } from '../../utils/ThemeProvider'
import { ReactComponent as MoonIcon } from './assets/moon.svg'
import { ReactComponent as SunIcon } from './assets/sunny.svg'
import { hexToRgbA } from '../../utils/hexToRgbA'
import { motion } from 'framer-motion'

const ThemeButton = () => {
  const { setVariant, variant } = React.useContext(ThemeContext) as TThemeContext

  return (
    <ThemeButtonStyled onClick={() => { setVariant((theme) => theme === 'dark' ? 'light' : 'dark') }}>
      {variant === 'dark' && (
        <motion.div className="icon" initial={{ y: 30 }} animate={{ y: 0 }}>
          <MoonIcon />
          <p className="theme-label">{variant}</p>
        </motion.div>
      )}
      {variant === 'light' && (
        <motion.div className="icon" initial={{ y: 30 }} animate={{ y: 0 }}>
          <SunIcon />
          <p className="theme-label">{variant}</p>
        </motion.div>
      )}
    </ThemeButtonStyled>
  )
}

export default ThemeButton

const ThemeButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 15px;
  gap: 10px;
  &:hover {
    background-color: ${({ theme }) => hexToRgbA(theme.colors.primary.L2, 0.5)};
  }
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) { 
    background-color: ${({ theme }) => hexToRgbA(theme.colors.primary.L1, 0.5)};
    padding: 0;
    border-radius: 100%;
    border: 1px solid transparent;  
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primary.L2};
    }
  }
  transition: 0.3s all ease-in-out;
  .icon {
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      border-radius: 100%;
      width: 18px;
      height: 18px;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        width: 22px;
        height: 22px;
        padding: 5px;
      }
      fill: ${({ theme }) => theme.colors.primary.L4};
      transition: 0.3s all ease-in-out;
    }
    .theme-label {
      margin: 0;
      font-size: 11px;
      font-weight: 600;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.text.L5};
  
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        display: none;
      }
    }
  }
`
