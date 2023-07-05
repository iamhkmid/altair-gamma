import { AnimatePresence, type Variants, motion } from 'framer-motion'
import { styled } from 'styled-components'
import { hexToRgbA } from '../../utils/hexToRgbA'
import { ReactComponent as CloseIcon } from '../../assets/icons/close-outline.svg'
import { ReactComponent as NextIcon } from '../../assets/icons/chevron-forward-outline.svg'
import { ReactComponent as PrevIcon } from '../../assets/icons/chevron-back-outline.svg'
import React from 'react'
import Image from '../Image'

interface ImageViewerProps {
  onClose: () => void
  src: string[]
  currentIdx: number
}

const ImageViewer: React.FC<ImageViewerProps> = (props) => {
  const [navigation, setNavigation] = React.useState({ idx: props.currentIdx, type: 'next' })

  const previewVariants: Variants = {
    prev: { opacity: 0, right: 100 },
    next: { opacity: 0, left: 100 },
    show: { opacity: 1, left: 0, right: 0 }
  }
  console.log(navigation.idx)

  const changeNavigation = (type: 'prev' | 'next'): void => {
    const counter = type === 'next' ? 1 : -1
    const newIdx = navigation.idx + counter < 0 ? props.src.length - 1 : (navigation.idx + counter) % props.src.length === 0 ? 0 : navigation.idx + counter
    setNavigation({ idx: newIdx, type })
  }

  return (
    <Main className="AltairImageViewer-root" layoutId="image-viewer">
      <div className="AltairImageViewer-header">
        <div className="left"></div>
        <div className="right">
          <div className="AltairImageViewer-closeButton" onClick={() => { props.onClose() }}><CloseIcon /></div>
        </div>
      </div>
      <div className="AltairImageViewer-navigation">
        <div className="AltairImageViewer-prev" onClick={() => { changeNavigation('prev') }}><PrevIcon /></div>
        <div className="AltairImageViewer-next" onClick={() => { changeNavigation('next') }}><NextIcon /></div>
      </div>
      <div className="AltairImageViewer-content">
        <AnimatePresence mode="popLayout">
          {props.src.map((img, idx) => idx === navigation.idx && (
            <motion.div
              key={img}
              className="AltairImageViewer-imageWrapper"
              variants={previewVariants}
              initial={navigation.type}
              animate="show"
              exit={navigation.type}
            >
              <Image src={img} alt="img" />
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="AltairImageViewer-NavPages">
          {props.src.map((val, idx) => (
            <div className="AltairImageViewer-NavPage" key={val}>
              {idx === navigation.idx && <motion.div layoutId="AltairImageViewer-NavPage" />}
            </div>
          ))}
        </div>
      </div>
    </Main>
  )
}

export default ImageViewer

const Main = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => hexToRgbA(theme.colors.slate.L11, 0.9)};
  z-index: 1000;
  
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  .AltairImageViewer-header {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    height: fit-content;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 11;
  }
  .right {
    display: flex;
    justify-content: flex-end;
    padding: 15px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
      padding: 20px;
    }
    .AltairImageViewer-closeButton {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      cursor: pointer;
      padding: 2px;
      &:hover {
        background-color: ${({ theme }) => hexToRgbA(theme.colors.rose.L8, 0.5)};
      }
      transition: 0.3s all ease-in-out;
      > svg {
        width: 30px;
        height: 30px;
        color: ${({ theme }) => theme.colors.slate.L2};
      }
    }
  }
  .AltairImageViewer-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    padding: 0 5px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
      padding: 0 20px;
    }
    .AltairImageViewer-prev, .AltairImageViewer-next {
      border-radius: 100%;
      width: min(30px, 30px);
      height: min(30px, 30px);
      padding: 5px;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => hexToRgbA(theme.colors.primary.L2, 0.5)};
      }
      transition: 0.3s all ease-in-out;
      > svg {
        width: 30px;
        color: ${({ theme }) => theme.colors.slate.L2};
      }
    }
  }
  .AltairImageViewer-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 20px;
    width: 1005;
    height: 100%;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
      width: 70vw;
    }
    .AltairImageViewer-imageWrapper {
      display: flex;
      position: relative;
      z-index: 1;
      .AltairImage-root {
        width: 70vw;
        height: calc(70vw / 16 * 9);
        @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
          width: 70vw;
          height: calc(70vw / 16 * 9);
        }
        overflow: hidden;
        transition: 0.3s all ease-in-out;
      }
    }
    .AltairImageViewer-NavPages {
      display: flex;
      gap: 5px;
      width: 100%;
      .AltairImageViewer-NavPage {
        display: flex;
        width: 100%;
        height: 5px;
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
  }
`
