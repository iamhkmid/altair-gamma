import { styled } from 'styled-components'
import { hexToRgbA } from '../../utils/hexToRgbA'
import { motion } from 'framer-motion'

export const MenuStyled = styled(motion.div)`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 20;
  padding: 15px 20px;
  box-sizing: border-box;
  top: 0;
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => hexToRgbA(theme.variant === "dark" ? "#000" : "#fff", 0.8)};
  transition: 0.3s background-color ease-in-out;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    padding: 15px 50px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
    padding: 15px 100px;
  }
  .left {
    display: flex;
    cursor: pointer;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    > p:nth-child(1){
      margin: 0;
      font-size: 13px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text.L5};
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
        font-size: 15px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        font-size: 18px;
      }
    }
    > p:nth-child(2){
      margin: 0;
      font-size: 12px;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.text.L4};
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
        font-size: 13px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        font-size: 16px;
      }
    }
  }
  .mobile-menu {
    display: flex;
    position: relative;
    padding-left: 15px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
      display: none;
    }
    .mobile-menu-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      height: min(35px, 35px);
      width: min(35px, 35px);
      border-radius: 100%;
      padding: 5px;
      box-sizing: border-box;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => hexToRgbA(theme.colors.primary.L1, 1)};
      }
      > svg {
        path {
          color: ${({ theme }) => hexToRgbA(theme.colors.text.L5!, 0.9)};
          stroke-width: 40px;
        }
        width: 100%;
      }
      transition: 0.3s all ease-in-out;
    }
    .mobile-menu-content {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      margin: 0;
      padding: 10px;
      width: 170px;
      overflow: hidden;
      list-style-type: none;
      gap: 5px;
      backdrop-filter: blur(5px);
      background-color: ${({ theme }) => theme.variant === "dark" ? hexToRgbA(theme.colors.slate.L11, 0.9) : hexToRgbA(theme.colors.slate.L2, 0.5)};
      border: 1px solid ${({ theme }) => hexToRgbA(theme.colors.text.L3, 0.2)};
      border-radius: 5px;
      ::after {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        border-radius: 5px;
        overflow: hidden;
        z-index: -1;
        opacity: 1;
      }  
      li {
        margin: 0;
        padding: 0;
        a {
          text-decoration: none;
        }
        .menu-button {
          text-align: start;
          font-size: 11px;
          font-weight: 600;
          background-color: transparent;
          padding: 10px 20px;
          width: 100%;
          cursor: pointer;
          outline: none;
          border: none;
          color: ${({ theme }) => theme.colors.text.L5};
          border-bottom: 2px solid transparent;
          border-radius: 5px;
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
            font-size: 13px;
          }
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
            font-size: 16px;
          }
          transition: 0.3s all ease-in-out;
        }
        .active {
          .menu-button {
            background-color: ${({ theme }) => hexToRgbA(theme.colors.primary.L2, 0.5)};
          }
        }
      }
    }
  }
  .menu {
    display: flex;
    align-items: center;
    
    .theme {
      display: none;
      padding-left: 20px;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        display: block;
      }
    }
    .resume {
      overflow: hidden;
      padding-left: 20px;
    }
    > ul {
      display: none;
      margin: 0;
      padding: 0;
      list-style-type: none;
      gap: 20px;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        display: flex;
      }
      > li {
        margin: 0;
        padding: 0;
        a {
          text-decoration: none;
        }
        .menu-button {
          position: relative;
          font-size: 11px;
          font-weight: 600;
          background-color: transparent;
          padding: 10px 20px;
          cursor: pointer;
          outline: none;
          border: none;
          color: ${({ theme }) => theme.colors.text.L5};
          &:hover {
            ::after {
              opacity: 1;
            }
          }
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
            font-size: 13px;
          }
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
            font-size: 16px;
          }
          transition: 0.3s all ease-in-out;
          &::after {
            position: absolute;
            content: "";
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: 5px;
            overflow: hidden;
            filter: blur(15px);
            background: ${({ theme }) => hexToRgbA(theme.colors.blue.L8, 0.4)};
            background: linear-gradient(10deg, ${({ theme }) => hexToRgbA(theme.colors.blue.L8, 0.6)} 20%, transparent 65%);
            transition: opacity 0.3s linear;
            z-index: -1;
            opacity: 0;
          }  
          &::before {
            position: absolute;
            content: "";
            top: 10px;
            right: 30px;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            border-radius: 5px;
            overflow: hidden;
            filter: blur(15px);
            background: ${({ theme }) => hexToRgbA(theme.colors.rose.L8, theme.variant === "light" ? 0.3 : 0.7)};
            transition: opacity 0.3s linear;
            z-index: -1;
            opacity: 0;
          }  
        }
      }
      :hover {
        .menu-button {
          &::after {
            opacity: 1;
          }
        }
      } 
      .active {
        .menu-button {
          &::after {
            opacity: 1;
          }
          &::before {
            opacity: 1;
          }
        }
      }
    }
  }
`
