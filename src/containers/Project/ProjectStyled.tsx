import { motion } from "framer-motion"
import { css, styled } from "styled-components"
import { hexToRgbA } from "../../utils/hexToRgbA"

export const ProjectStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .content {
    display: grid;
    grid-template-rows: 1fr auto;
    width: 100%;
    height: 100%;
    padding: 70px 20px 60px 20px;
    gap: 40px;
    box-sizing: border-box;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 100px 12vw;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
      padding: 100px 13vw;
    }
    .preview {
      display: flex;
      flex-direction: column;
    }
    .navigation-root {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: fit-content;
      align-items: center;
      .navigation-page-wrapper {
        display: flex;
        width: 100%;
        gap: 5px;
        .navigation-page {
          display: flex;
          height: 5px;
          width: 100%;
          border-radius: 3px;
          background-color: ${({ theme }) => hexToRgbA(theme.colors.primary.L2, 0.5)};
          > div {
            width: 100%;
            height: 5px;
            border-radius: 3px;
            background-color: ${({ theme }) => hexToRgbA(theme.colors.primary.L3, 0.7)};
          }
        }
      }
      .navigation-button-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        width: 100%;
      }
    }
  }
`

export const ProjectWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    display: grid;
    grid-template-columns: 400px 1fr;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
    grid-template-columns: 600px 1fr;
  }
  .preview-image {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    .current-image {
      width: 100%;
      border-radius: 5px;
      overflow: hidden;
      box-sizing: border-box;
      height: calc(100vw / 16 * 9 - 22px);
      border: 1px solid ${({ theme }) => theme.variant === "light" ? theme.colors.primary.L2 : "transparent"};
      transition: 0.3s border ease-in-out;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        width: 100%;
        height: calc(400px / 16 * 9);
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        width: 100%;
        height: calc(600px / 16 * 9);
      }
      position: relative;
      .under-development {
        display: flex;
        pointer-events: none;
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        z-index: 1;
        background-color: ${({ theme }) => hexToRgbA(theme.colors.text.L1, 0.7)};
        transition: 0.2s opacity ease-in-out;
        .dev-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: ${({ theme }) => theme.colors.text.L5};
          padding: 8px 13px;
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 700;
          border-radius: 10px;
          backdrop-filter: blur(5px);
          background: ${({ theme }) => hexToRgbA(theme.colors.text.L1, 0.7)};
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
            padding: 10px 15px;
            font-size: 15px;
          }
          border: 1px solid ${({ theme }) => hexToRgbA(theme.colors.text.L5, 0.2)};
          svg.loader {
            width: 25px;
            height: 25px;
            @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
              width: 35px;
              height: 35px;
            }
            > defs > linearGradient stop {
              stop-color: ${({ theme }) => theme.colors.text.L5};
            }
          }
          -webkit-user-select: none; /* Safari */
          -ms-user-select: none; /* IE 10 and IE 11 */
          user-select: none; /* Standard syntax */
        }
      }
      &:hover {
        .image-zoom {
          opacity: 1;
        }
      }
      .image-zoom {
        opacity: 0;
        cursor: pointer;
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        z-index: 1;
        background-color: ${({ theme }) => hexToRgbA(theme.colors.slate.L11, 0.7)};
        transition: 0.2s opacity ease-in-out;
        .zoom-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          color: ${({ theme }) => theme.colors.slate.L2};
          padding: 8px 13px;
          font-size: 12px;
          font-weight: 500;
          border-radius: 10px;
          background-color: ${({ theme }) => hexToRgbA(theme.colors.slate.L11, 0.8)};
          > svg {
            width: 20px;
            height: 20px;
            stroke-width: 6px;
          }
          -webkit-user-select: none; /* Safari */
          -ms-user-select: none; /* IE 10 and IE 11 */
          user-select: none; /* Standard syntax */
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
            padding: 10px 15px;
            font-size: 14px;
          }
        }
      }
    }
    .image-list {
      display: grid;
      grid-template-columns: repeat(5, minmax(30px, 1fr));
      gap: 5px;
      width: calc(100% - 5px);
      .image-wrapper{
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 10px;
        box-sizing: border-box;
        transition: 0.3s all ease-in-out;
        .AltairImage-root {
          border-radius: 5px;
          overflow: hidden;
          aspect-ratio: 16/9;
          border: 1px solid ${({ theme }) => theme.variant === "light" ? theme.colors.primary.L2 : "transparent"};
        }
        &.active {
          opacity: 1;
        }
        cursor: pointer;
        opacity: 0.6;
        transition: all 0.3s ease-in-out;
        &:hover {
          opacity: 1;
        }
        .selected-img {
          display: flex;
          justify-content: center;
          width: 100%;
          left: 0;
          bottom: -5px;
          position: absolute;
          &::before {
            content: "";
            display: flex;
            position: relative;
            width: 20%;
            height: 3px;
            top: 5px;
            background-color: ${({ theme }) => theme.colors.primary.L4};
            z-index: 1;
            border-radius: 3px;
          }
        }
      }
    }
  }
  .preview-detail {
    display: flex;
    flex-direction: column;
    .title {
      color: ${({ theme }) => theme.colors.text.L5};
      margin: 0;
      font-size: 20px;
      font-weight: 800;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
        font-size: 25px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        font-size: 33px;
      }
      transition: 0.3s all ease-in-out;
    }
    .project-type {
      display: flex;
      gap: 7px;
      align-items: center;
      margin-top: 5px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 5px;
      text-transform: uppercase;
      > span {
        color: ${({ theme }) => theme.colors.rose.L6};
      }
      svg {
        width: 15px;
        height: 15px;
        fill: ${({ theme }) => theme.colors.blue[theme.variant === "dark" ? "L4" : "L6"]};
        transition: 0.3s all ease-in-out;
      }
      color: ${({ theme }) => theme.colors.blue[theme.variant === "dark" ? "L4" : "L6"]};
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
        font-size: 15px;
        svg {
          height: 16px;
          width: 16px;
        }
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        font-size: 15px;
        svg {
          height: 17px;
          width: 17px;
        }
      }
      transition: 0.3s all ease-in-out;
    }
    .description {
      color: ${({ theme }) => theme.colors.text.L4};
      margin: 0;
      margin-top: 15px;
      font-size: 11px;
      font-weight: 300;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        font-size: 12px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        font-size: 16px;
      }
      transition: 0.3s all ease-in-out;
    }
    .techs {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 15px;
      width: fit-content;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        margin-top: 30px;
      }
      > p:nth-child(1) {
        margin: 0;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: ${({ theme }) => hexToRgbA(theme.colors.text.L4)};
      }
      > div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        > p {
          padding: 2px 7px;
          border-radius: 5px;
          backdrop-filter: blur(5px);
          background-color: ${({ theme }) => hexToRgbA(theme.colors.blue.L7, 0.3)};
          font-size: 11px;
          font-weight: 500;
          margin: 0;
          color: ${({ theme }) => theme.colors.primary.L4};
        }
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
        > p:nth-child(1) {
          font-size: 13px;
        }
        > div:nth-child(2) {
          > p {
            font-size: 14px;
          }
        }
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        > p:nth-child(1) {
          font-size: 15px;
        }
        > div:nth-child(2) {
          > p {
            padding: 3px 10px;
            font-size: 15px;
          }
        }
      }
      transition: 0.3s all ease-in-out;
    }
  }
`
type TNavigationBtn = {
  $type: 'prev' | 'next'
  $disabled: boolean
}
export const NavigationBtn = styled.div<TNavigationBtn>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  position: relative;
  cursor: pointer;
  padding: 10px;
  gap: 5px;
  width: 100%;
  justify-self: ${({ $type }) => $type === "prev" ? "end" : "start"};
  border-radius: 5px;
  ::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 5px;
    overflow: hidden;
    filter: blur(15px);
    background: ${({ theme }) => hexToRgbA(theme.colors.blue.L8, 0.5)};
    background: linear-gradient(50deg, ${({ theme }) => hexToRgbA(theme.colors.blue.L8, 0.2)} 20%, transparent 75%);
    transition: opacity 0.3s linear;
    z-index: -1;
    opacity: 0;
    ${({ $type }) => $type === "prev" && css`
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    `}
  }  
  @media (hover: hover) {
   &:hover {
    ::after {
      opacity: 1;
    }
   }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
    width: 200px;
  }
  transition: 0.3s opacity ease-in-out;
  ${({ $disabled, $type }) => !$disabled && css`
  &::before {
    content: '';
    ${$type === "next" ? css`left: 20px;` : css`right:20px;`};
      top: 20px;
      width: 100%;
      height: 100%;
      margin: auto 0;
      position: absolute;
      content: "";
      filter: blur(15px);
      background: radial-gradient(${({ theme }) => hexToRgbA(theme.colors.rose.L7, 0.8)}, rgba(1, 65, 255, 0));
      opacity: 0;
      width: 50px;
      height: 15px;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
        width: 80px;
        height: 20px;
      }
      animation: animateNav 10s infinite ${$type === "next" ? "0s" : "5s"};
      @keyframes animateNav {
        0%   {  opacity: 0; }
        40%   {  opacity: 0; }
        60%   {  opacity: 1; }
        0%   { opacity: 0; }
        100% {  opacity: 0; }
      };
    }`
  }
  box-sizing: border-box;
  ${({ $type }) => $type === 'prev' && css`
  align-items: end;
  `}
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  
  > p:nth-child(1){
    color: ${({ theme }) => theme.colors.text.L4};
    margin: 0;
    font-size: 13px;
    font-weight: 700;
    transition: 0.3s all ease-in-out;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
      font-size: 14px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
      font-size: 18px;
    }
  }
  > p:nth-child(2){
    color: ${({ theme }) => theme.colors.text.L3};
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    transition: 0.3s all ease-in-out;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
      font-size: 13px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
      font-size: 16px;
    }
  }
  
  ${({ $disabled }) => $disabled && css`
    pointer-events: none;
    > p:nth-child(1){
      color: ${({ theme }) => theme.colors.text.L2};
    }
  `}
  `
