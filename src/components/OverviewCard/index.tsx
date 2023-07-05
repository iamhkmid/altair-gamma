/* eslint-disable react/no-unknown-property */
import React from 'react'
import { css, styled } from 'styled-components'
import { hexToRgbA } from '../../utils/hexToRgbA'
import { overviewData } from '../../utils/constants/overview'
import { motion } from 'framer-motion'
import Button from '../Form/Button'
import ProfileImage from '../../assets/images/home_img.webp'
import CircleGradientLoader from '../Loading/CircleGradientLoader'

const OverviewCard: React.FC = () => {
  const [loadImg, setLoadImg] = React.useState(true)
  const [glowText, setGlowText] = React.useState(1)

  React.useEffect(() => {
    const intervalGlowText = setInterval(() => {
      setGlowText((prev) => {
        const newIdx = (prev + 1) - 3 > 0 ? 1 : prev + 1
        return newIdx
      })
    }, 3000)
    return () => {
      clearInterval(intervalGlowText)
    }
  }, [])

  const onLoadImg = (): void => {
    setLoadImg(false)
  }

  const onClickAction = (url: string): void => {
    window.open(url, '_blank')
  }

  return (
    <OverviewCardStyled>
      <div className="section1">
        {loadImg && <motion.div initial={{ opacity: 0 }} animate={{ opacity: loadImg ? 1 : 0 }} className="img-loader" transition={{ duration: 0.7 }}><CircleGradientLoader /></motion.div>}
        <motion.div className="img-wrapper" >
          {/* <motion.img initial={{ opacity: 0 }} animate={{ opacity: loadImg ? 0 : 1 }} transition={{ duration: 0.7 }} src={ProfileImages} alt="img" onLoad={onLoadImg} /> */}
          <motion.svg viewBox="0 0 182 185" initial={{ opacity: 0 }} animate={{ opacity: loadImg ? 0 : 1 }} transition={{ duration: 0.7 }}>
            <defs>
              <linearGradient id="linearGradient1497" x1="361.1" x2="365.28" y1="644.37" y2="355.22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#000" offset="0" />
                <stop stopOpacity="0" offset="1" />
              </linearGradient>
            </defs>
            <image x=".65441" y="-.062146" width="181.21" height="185.15" preserveAspectRatio="none" href={ProfileImage} onLoad={onLoadImg} />
            <path transform="scale(.26458)" d="m119.34 354.28-11.252 13.127-9.207 13.299-24.891 28.473-18.244 20.459-11.764 10.74-4.6035 6.6484 0.85352 9.207-0.3418 5.627-5.1133 7.1602-18.414 30.178-7.332 15.514-1.1934 12.447 8.0137 30.518 9.377 32.393 9.0371 27.961 15.344 36.486 18.242 36.484 4.4336 8.8652 598.17-0.50976 5.541-29.07s2.0442-19.522 1.959-20.033c-0.08542-0.51148-1.2774-36.74-1.2774-36.74l8.2676-3.75 2.2168-3.666v-6.8203l-6.9902-20.117-0.76757-10.742-0.33985-12.189-5.2012-16.965-1.2773-13.895-3.4961-16.197-1.7051-15.514-1.6191-8.2695-0.68164-15.941-5.541-20.031-1.875-16.539-5.3711-30.518-5.2852-18.924-6.4356-29.154h-521.24zm-20.971 161.37 25.574 15.602 11.424 5.2852 5.9668 0.16992s4.4326-1.7044 6.4785-3.0684c2.0459-1.3639 8.8652-7.502 8.8652-7.502l5.2852-1.3633 3.9219-4.0918 2.2168 3.75-1.0234 9.7188-9.377 80.301-2.2168 20.289-12.957 17.561-5.7969 9.377-2.2168 8.5254-3.2383 3.9199-7.6719-23.016-5.9688-26.086-5.1133-20.971-7.8438-31.369-4.4316-23.357-2.5586-13.129-0.16992-9.5469 0.85156-10.998z" fill="url(#linearGradient1497)" strokeWidth=".65386" />
          </motion.svg>
          <div className="light" />
        </motion.div>
      </div>
      <div className="section2">
        <div className="content">
          <div className="info">
            <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="text1">
              {overviewData.text1}
            </motion.p>
            <motion.p initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text2">
              {overviewData.text2.map((text, idx) => <GlowText key={idx} $idx={idx} $active={idx === glowText}> {text}</GlowText>)}
            </motion.p>
            <motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="description">
              {overviewData.description}
            </motion.p>
          </div>
          <div className="action">
            {overviewData.action.map((button, idx) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 * idx, duration: 0.7 }} key={button.key}>
                <Button variant={button.variant} playAnimationOnMobile={button.animation} className={button.variant === 'icon' ? 'icon' : ''} onClick={() => { onClickAction(button.url) }} particles={button.particles} key={button.key}>{button.variant === 'text' ? button.label : button.icon}</Button>
              </motion.div>
            ))}
          </div>
          <div className="light1" />
          <div className="light2" />
          <div className="light3" />
        </div>
      </div>
    </OverviewCardStyled>
  )
}

export default OverviewCard

const textColors = [['#fff', '#fff'], ['#0084ff', '#00d9ff'], ['#ae00ff', '#ff39de'], ['#ff5100', '#fff025']]

interface TGlowText { $active: boolean, $idx: number }
const GlowText = styled.span<TGlowText>`
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

const OverviewCardStyled = styled.div`
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
        align-items: center;
        z-index: 10;
        gap: 10px;
        width: 100%;
        justify-content: center;
        @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
          justify-content: flex-start;
        }
        .AltairButton-root {
          svg {
            width: 14px;
            height: 14px;
            fill: currentColor;
            @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
              width: 18px;
              height: 18px;
            }
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
