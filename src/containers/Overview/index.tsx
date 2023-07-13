/* eslint-disable react/no-unknown-property */
import React from 'react'
import { motion } from "framer-motion"
import { OverviewCardStyled, GlowText } from './OverviewStyled'
import { overviewData } from '../../utils/constants/overview'
import Button from '../../components/Form/Button'
import { downloadFile } from '../../utils/downloadFile'
import ProfileImage from '../../assets/images/home_img.webp'
import CircleGradientLoader from '../../components/Loading/CircleGradientLoader'

const Overview = () => {
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

  const onLoadImg = () => {
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
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 * idx, duration: 0.7 }} key={button.key}>
                <Button
                  key={button.key}
                  variant={button.variant}
                  playAnimationOnMobile={button.animation}
                  endIcon={button.variant === "text" ? button.endIcon : null}
                  className={`${button.variant === 'icon' ? 'icon' : ''} ${button.variant === 'text' && !!button.endIcon ? 'end-icon' : ''}`}
                  onClick={() => button.isFile ? downloadFile(button.url) : onClickAction(button.url)}
                  particles={button.particles}
                >
                  {button.variant === 'text' ? button.label : button.icon}
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="resume">
            <div className="download" onClick={() => downloadFile(overviewData.resume.url)}>
              {overviewData.resume.label}
              {overviewData.resume.endIcon}
              <div className="lightbtn1" />
              <div className="lightbtn2" />
            </div>
          </div>
          <div className="light1" />
          <div className="light2" />
          <div className="light3" />
        </div>
      </div>
    </OverviewCardStyled>
  )
}

export default Overview