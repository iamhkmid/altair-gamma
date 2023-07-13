import { css, styled } from "styled-components"
import { hexToRgbA } from "../../utils/hexToRgbA"

const textColors = [['#fff', '#fff'], ['#0084ff', '#00d9ff'], ['#ae00ff', '#ff39de'], ['#ff5100', '#fff025']]

interface TGlowText { $active: boolean, $idx: number }
export const GlowText = styled.span<TGlowText>`
  ${({ theme }) => css`
    @property --a {
        syntax: '<color>';
        inherits: false;
        initial-value: ${theme.colors.text.L5};
    }

    @property --b {
        syntax: '<color>';
        inherits: false;
        initial-value: ${theme.colors.text.L5};
    }
  `}
  transition: --a 0.5s, --b 0.5s;
  background: linear-gradient(to right, var(--a), var(--b));
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  ${({ $active, $idx }) => $active && css`
    --a: ${textColors[$idx][0]};
    --b: ${textColors[$idx][1]};
  `}
  ${({ $active, theme }) => !$active && css`
    --a: ${theme.colors.text.L5};
    --b: ${theme.colors.text.L5};
  `}
`

export const OverviewCardStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 40px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
    display: grid;
    grid-template-columns: auto 1fr;
  }
  .section1 {
    display: none;
    justify-content: center;
    align-items: flex-end;
    height: fit-content;
    animation: animateImg 15s infinite;
    opacity: 0.9;
    z-index: 10;
    height: 100%;
    width: 40vw;
    
    .light {
      content: '';
      left: -50%;
      bottom: -50%;
      position: absolute;
      filter: blur(45px);
      transform: translateZ(0);
      background: linear-gradient(
        to bottom right,
        rgba(1, 65, 255, 0),
        rgba(1, 65, 255, 0),
        ${({ theme }) => hexToRgbA(theme.colors.primary.L3, 0.5)}
      );
      border-radius: 50%;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: 0.3s all ease-in-out;
      animation: animate1 15s infinite;
      z-index: 100;
    }
    
    .img-loader{
      position: absolute;
      width: 100%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      
    }
    .img-wrapper{
      position: relative;
      width: 100%;
      svg {
        width: 100%;
        linearGradient {
          stop {
            stop-color: ${({ theme }) => theme.variant === 'dark' ? '#000' : '#fff'};
            transition: stop-color 0.3s ease-in-out;
          }
        }
      }
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
      display: flex;  
      .image{
        svg {
          width: 100%;
        }
      }
    }
  }
  .section2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 10;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
      padding: 0;
      align-items: flex-start;
    }
    .content {
      display: flex;
      flex-direction: column;
      position: relative;
      gap: 40px;
      .info {
        display: flex;
        flex-direction: column;
      }
      .action {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        z-index: 10;
        gap: 10px;
        width: 100%;
        justify-content: center;
        @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
          justify-content: flex-start;
        }
        .AltairButton-root {
          > svg {
            width: 14px;
            height: 14px;
            fill: currentColor;
            @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
      .resume {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        z-index: 10;
        @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
          align-items: flex-start;
        }
        .download {
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          gap: 5px;
          width: fit-content;
          border-radius: 20px;
          padding: 10px 10px 10px 15px;
          color: ${({ theme }) => theme.colors.text.L4};
          &:hover {
            background-color: ${({ theme }) => hexToRgbA(theme.colors.rose.L7, 0.3)};
            color: ${({ theme }) => theme.colors.text.L5};
          }
          font-size: 11px;
          font-weight: 600;
          transition: 0.3s all ease;
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
            font-size: 13px;
            padding: 10px 10px 10px 15px;
          }
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
            font-size: 14px;
          }
          > svg {
            fill: currentColor;
            width: 15px;
            height: 15px;
            @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
              width: 20px;
              height: 20px;
            }
            @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
              width: 20px;
              height: 20px;
            }
          }
          > div.lightbtn1 {
            content: '';
            top: 0px;
            left: -40px;
            position: absolute;
            background: radial-gradient(${({ theme }) => hexToRgbA(theme.colors.rose?.L7, 0.8)}, ${({ theme }) => hexToRgbA(theme.colors.rose?.L8, 0.1)}, rgba(1, 65, 255, 0));
            transform: translateZ(0);
            width: 200px;
            height: 150px;
            z-index: -1;
            animation: animatebtn1 10s infinite;
          } 
          > div.lightbtn2 {
            content: '';
            top: -30px;
            left: -40px;
            position: absolute;
            background: radial-gradient(${({ theme }) => hexToRgbA(theme.colors.rose?.L8, 0.6)}, ${({ theme }) => hexToRgbA(theme.colors.rose?.L8, 0)}, rgba(1, 65, 255, 0));
            transform: translateZ(0);
            width: 200px;
            height: 150px;
            z-index: -1;
            animation: animatebtn2 15s infinite;
          }
          @keyframes animatebtn1 {
            0%   { opacity: 0.5;}
            50%   { opacity: 1;}
            100% { opacity: 0.5;}
          }
          
          @keyframes animatebtn2 {
            0%   { opacity: 0; left: -120%;}
            50%   { opacity: 1; left: 0;}
            100% { opacity: 0; left: 150%;}
          }
        }
      }
    }
  }
  .text1 {
    color: ${({ theme }) => theme.colors.text.L4};
    font-size: 15px;
    font-weight: 800;
    margin: 0;
    text-align: center;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
      font-size: 25px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
      font-size: 30px;
      text-align: start;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
      font-size: 45px;
    }
  }
  .text2 {
    color: ${({ theme }) => theme.colors.text.L4};
    font-size: 20px;
    font-weight: 900;
    margin: 0;
    margin-top: 5px;
    text-align: center;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
      font-size: 35px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
      font-size: 40px;
      text-align: start;
      margin-top: 0;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
      font-size: 55px;
    }
  }
  .description {
    color: ${({ theme }) => theme.colors.text.L4};
    font-size: 10px;
    font-weight: 400;
    margin: 0;
    line-height: 15px;
    word-spacing: 1px;
    text-align: center;
    margin-top: 10px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
      font-size: 14px;
      line-height: 25px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
      font-size: 15px;
      text-align: start;
      max-width: 80%;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
      font-size: 17px;
    }
  }
  .light1 {
    content: '';
    left: -10%;
    bottom: 0;
    position: absolute;
    filter: blur(45px);
    background: radial-gradient(${({ theme }) => hexToRgbA(theme.colors.blue?.L8, 0.4)}, ${({ theme }) => hexToRgbA(theme.colors.blue?.L8, 0.1)}, rgba(1, 65, 255, 0));
    transform: translateZ(0);
    width: 400px;
    height: 400px;
    z-index: 1;
    animation: animate1 10s infinite;
  }
  .light2 {
    content: '';
    right: -200px;
    bottom: -50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
    background: radial-gradient(${({ theme }) => hexToRgbA(theme.colors.rose.L9, 0.25)}, rgba(1, 65, 255, 0));
    width: 500px;
    height: 500px;
    z-index: 2;
    animation: animate2 10s infinite;
  }

  .light3 {
    content: '';
    left: 30%;
    top: 0%;
    position: absolute;
    filter: blur(45px);
    background: radial-gradient(${({ theme }) => hexToRgbA(theme.colors.rose.L9, 0.2)}, rgba(1, 65, 255, 0));
    width: 300px;
    height: 300px;
    z-index: 2;
    animation: animate2 5s infinite;
  }

  @keyframes animate1 {
    0%   { opacity: 0.5;}
    50%   { opacity: 1;}
    100% { opacity: 0.5;}
  }
  
  @keyframes animate2 {
    0%   { opacity: 1;}
    50%   { opacity: 0.5;}
    100% { opacity: 1;}
  }
`