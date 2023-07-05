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
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    padding: 15px 50px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
    padding: 15px 100px;
  }
  .left {
    display: flex;
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
      list-style-type: none;
      gap: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      background-color: ${({ theme }) => hexToRgbA(theme.colors.text.L1, 0.9)};
      border-radius: 5px;
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
    display: none;
    align-items: center;
    gap: 20px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
      display: flex;
    }
    > ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style-type: none;
      gap: 20px;
      > li {
        margin: 0;
        padding: 0;
        a {
          text-decoration: none;
        }
        .menu-button {
          font-size: 11px;
          font-weight: 600;
          background-color: transparent;
          padding: 10px 20px;
          cursor: pointer;
          outline: none;
          border: none;
          color: ${({ theme }) => theme.colors.text.L5};
          border-bottom: 2px solid transparent;
          &:hover {
            border-bottom: 2px solid ${({ theme }) => hexToRgbA(theme.colors.primary.L3, 0.5)};
          }
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
            font-size: 13px;
          }
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
            font-size: 16px;
          }
          transition: 0.3s all ease-in-out;
        }
      }
      .active {
        .menu-button {
          border-bottom: 2px solid ${({ theme }) => hexToRgbA(theme.colors.primary.L3, 0.5)};
        }
      }
    }
  }
`
