import { css, styled } from "styled-components";
import { hexToRgbA } from "../../utils/hexToRgbA";
import { motion } from "framer-motion";

export const ExperienceStyled = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  box-sizing: border-box;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 130px;
  padding-top: calc(5vh + 60px);
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    padding-top: calc(10vh + 70px);
    padding-bottom: 50px;
    max-height: calc(100vh - 70px);
  }

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background:  ${({ theme }) => hexToRgbA(theme.colors.primary.L4, 0.3)};
  }
  &::-webkit-scrollbar-thumb:hover {
    background:  ${({ theme }) => hexToRgbA(theme.colors.primary.L4, 0.7)};
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding: 0 20px;
    gap: 40px;
    box-sizing: border-box;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
      padding: 0 12vw;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
      padding: 0 13vw;
    }
    .experiences {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
  }
`

type TExperienceItem = {
  $idx: number
  $length: number
}

export const ExperienceItem = styled(motion.div) <TExperienceItem>`
  display: flex;
  gap: 20px;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
    width: 500px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    width: 600px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
    width: 600px;
  }
  .stage {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      position: relative;
      height: 30px;
      width: 30px;
      padding: 8px;
      box-sizing: border-box;
      background-color: ${({ theme }) => hexToRgbA(theme.colors.blue.L6, 0.3)};
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        height: 35px;
        width: 35px;
        padding: 9px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        height: 40px;
        width: 40px;
        padding: 10px;
      }
      > svg {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        path {
          color: ${({ theme }) => theme.variant === "dark" ? hexToRgbA(theme.colors.blue.L1, 0.8) : hexToRgbA(theme.colors.blue.L6, 0.7)};
          stroke-width: 90px;
        }
      }
      div.current {
        display: flex;
        position: relative;
        z-index: 1;
        width: 80%;
        height: 80%;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.variant === "dark" ? hexToRgbA(theme.colors.blue.L1, 0.8) : hexToRgbA(theme.colors.blue.L6, 0.5)};
      }
      &::before {
        content: "";
        display: flex;
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        border-radius: 100%;
        background-color: ${({ theme }) => hexToRgbA(theme.colors.blue.L6, 1)};
        animation: animloader 1.5s ease-in infinite;
        -webkit-animation-play-state: ${({ $idx }) => $idx === 0 ? "running" : "paused"};
        animation-play-state: ${({ $idx }) => $idx === 0 ? "running" : "paused"};

        @keyframes animloader {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        } 
      }
    }
    .line {
      display: ${({ $idx, $length }) => $idx === ($length - 1) ? "none" : "flex"};
      width: 4px;
      border-radius: 5px;
      height: 70px;
      background-color: ${({ theme }) => hexToRgbA(theme.colors.blue.L6, 0.5)};
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        height: 80px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        height: 100px;
      }
    }
  }
  .detail {
    display: flex;
    flex-direction: column;
    > p:nth-child(1){
      font-size: 18px;
      font-weight: 700;
      margin: 0;
      color: ${({ theme }) => theme.colors.text.L5};
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        font-size: 25px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        font-size: 27px;
      }
    }
    > p:nth-child(2){
      font-size: 12px;
      font-weight: 600;
      margin: 0;
      color: ${({ theme }) => theme.colors.blue[theme.variant === "dark" ? "L4" : "L6"]};
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        font-size: 14px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        font-size: 17px;
      }
    }
    > p:nth-child(3){
      padding-top: 10px;
      font-size: 11px;
      font-weight: 400;
      margin: 0;
      color: ${({ theme }) => theme.colors.text.L4};
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        font-size: 13px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        font-size: 15px;
      }
    }
  }
`