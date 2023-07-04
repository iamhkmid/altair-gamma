import styled, { css } from 'styled-components'
import { hexToRgbA } from '../../../utils/hexToRgbA'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 14px;
  align-items: center;
  .particles {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    opacity: var(--active, 0);
    pointer-events: none;
    transition: 0.2s all ease-in-out;
  }
`
interface TParticles {
  $size: number
  $y: number
  $x: number
  $duration: number
  $delay: number
  $alpha: number
  $originX: string
  $originY: string
}

export const Particle = styled.div<TParticles>`
  position: absolute;
  border-radius: 100%;
  width: 2px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors?.text?.L5};
  width: calc(${({ $size }) => $size} * 7px);
  height: calc(${({ $size }) => $size} * 7px);  
  top: calc(${({ $y }) => $y} * 1%);
  left: calc(${({ $x }) => $x} * 1%);
  opacity: ${({ $alpha }) => $alpha};
  -webkit-animation: float-out calc(${({ $duration }) => $duration} * 1s) calc(${({ $delay }) => $delay} * -1s) infinite linear;
  animation: float-out calc(${({ $duration }) => $duration} * 1s) calc(${({ $delay }) => $delay} * -1s) infinite linear;
  transform-origin: ${({ $originX }) => $originX} ${({ $originY }) => $originY};
  -webkit-animation-play-state: var(--play-state, paused);
  animation-play-state: var(--play-state, paused);
  @keyframes float-out {
    to {
      rotate: 360deg;
    }
  }
`

interface TButton {
  $fullWidth: boolean
  $isIcon: boolean
}

export const ButtonStyled = styled.button<TButton>`
  /* ---------------------------------- BASE ---------------------------------- */
  border: none;
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  box-shadow: 0px 6px 6px ${({ theme }) => theme.colors?.primary?.L3} 10;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  margin: 0;
  padding: 8px 12px;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};

  ${({ $isIcon }) => $isIcon && css`
    padding: 10px;
    border-radius: 100%;
  `};

  &:hover ~.particles{
    --active: 1;
    --play-state: running;
  }
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoint?.sm}px){
    font-weight: 500;
    padding: 10px 15px;
    font-size: 13px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint?.xxxl}px){
    font-weight: 500;
    font-size: 15px;
  }

  background-color: ${({ theme }) => hexToRgbA(theme.variant === 'dark' ? theme.colors?.primary?.L11 : theme.colors?.primary?.L2, 0.8)};
  color: ${({ theme }) => theme.colors?.text?.L3};
  border: 2px solid transparent;

  &:hover {
  background-color: ${({ theme }) => theme.colors?.primary?.L3};
  -webkit-box-shadow: 0px 0px 40px 10px ${({ theme }) => hexToRgbA(theme.colors?.primary?.L3, 0.5)};
  -moz-box-shadow: 0px 0px 40px 10px ${({ theme }) => hexToRgbA(theme.colors?.primary?.L3, 0.5)};
  box-shadow: 0px 0px 40px 10px ${({ theme }) => hexToRgbA(theme.colors?.primary?.L3, 0.5)};
  color: ${hexToRgbA('#ffffff', 1)};
  border: 2px solid ${({ theme }) => hexToRgbA(theme.colors?.primary?.L4, 0.2)};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors?.text?.L2};
    cursor: not-allowed;
  }
  
  transition: 0.3s all ease-in-out;
`

export const IconWrapper = styled.div`
  display: flex;
`
