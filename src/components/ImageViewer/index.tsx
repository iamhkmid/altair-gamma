import { AnimatePresence, type Variants, motion } from 'framer-motion'
import { styled } from 'styled-components'
import { hexToRgbA } from '../../utils/hexToRgbA'
import { ReactComponent as CloseIcon } from '../../assets/icons/close-outline.svg'
import { ReactComponent as NextIcon } from '../../assets/icons/chevron-forward-outline.svg'
import { ReactComponent as PrevIcon } from '../../assets/icons/chevron-back-outline.svg'
import { ReactComponent as PlusIcon } from '../../assets/icons/add-outline.svg'
import { ReactComponent as MinusIcon } from '../../assets/icons/remove-outline.svg'
import { ReactComponent as ResetIcon } from '../../assets/icons/refresh-outline.svg'
import React from 'react'
import Image from '../Image'

interface ImageViewerProps {
  onClose: () => void
  src: string[]
  currentIdx: number
}

const ImageViewer: React.FC<ImageViewerProps> = (props) => {
  const [navigation, setNavigation] = React.useState({ idx: props.currentIdx, type: 'next' })
  const [scale, setScale] = React.useState(1)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const imgRef = React.useRef<HTMLDivElement>(null)
  const [resetDrag, setResetDrag] = React.useState(false)

  const previewVariants: Variants = {
    prev: { opacity: 0, right: -100 },
    next: { opacity: 0, left: 100 },
    show: { opacity: 1, left: 0, right: 0, scale, ...(resetDrag ? { x: 0, y: 0 } : {}) }
  }

  const changeNavigation = (type: 'prev' | 'next'): void => {
    const counter = type === 'next' ? 1 : -1
    const newIdx = navigation.idx + counter < 0 ? props.src.length - 1 : (navigation.idx + counter) % props.src.length === 0 ? 0 : navigation.idx + counter
    setNavigation({ idx: newIdx, type })
  }

  const onClickScale = (type: "plus" | "minus") => {
    setScale((prev) => type === "plus" ? prev + 0.25 : prev - 0.25)
  }

  const onClickReset = () => {
    setResetDrag(true)

    setScale(1)
  }

  console.log({
    top: scale === 1 ? 0 : ((-0.5 * (imgRef.current?.clientHeight || 0))* scale) + 100,
    left: scale === 1 ? 0 : (-0.5 * (imgRef.current?.clientWidth || 0)) * scale,
    right: scale === 1 ? 0 : (0.5 * (imgRef.current?.clientWidth || 0)) * scale,
    bottom: scale === 1 ? 0 : ((0.5 * (imgRef.current?.clientHeight || 0)) * scale) - 100,
  })

  return (
    <Main className="AltairImageViewer-root" layoutId="image-viewer" ref={containerRef}>
      <div className="AltairImageViewer-header">
        <div className="left"></div>
        <div className="right">
          <div className="AltairImageViewer-closeButton" onClick={() => { props.onClose() }}><CloseIcon /></div>
        </div>
      </div>
      <div className="AltairImageViewer-content">
        <div className="AltairImageViewer-prev" onClick={() => { changeNavigation('prev') }}><PrevIcon /></div>
        <div className="AltairImageViewer-ImagePages" ref={imgRef}>
          <AnimatePresence mode="popLayout">
            {props.src.map((img, idx) => idx === navigation.idx && (
              <motion.div
                key={img}
                drag
                dragConstraints={{
                  top: scale === 1 ? 0 : ((-0.5 * (imgRef.current?.clientHeight || 0)) * scale),
                  left: scale === 1 ? 0 : (-0.5 * (imgRef.current?.clientWidth || 0)) * scale,
                  right: scale === 1 ? 0 : (0.5 * (imgRef.current?.clientWidth || 0)) * scale,
                  bottom: scale === 1 ? 0 : ((0.5 * (imgRef.current?.clientHeight || 0)) * scale),
                }}
                className="AltairImageViewer-imageWrapper"
                variants={previewVariants}
                initial={navigation.type}
                animate="show"
                exit={navigation.type}
                onClick={() => setResetDrag(false)}
              >
                <Image src={img} alt="img" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="AltairImageViewer-next" onClick={() => { changeNavigation('next') }}><NextIcon /></div>
      </div>
      <div className="AltairImageViewer-footer">
        <div className="AltairImageViewer-zoom">
          <button className="AltairImageViewer-zoomMinus" disabled={scale - 0.25 < 0.25} onClick={() => onClickScale("minus")}><MinusIcon /></button>
          <button className="AltairImageViewer-zoomPlus" disabled={scale + 0.25 > 3} onClick={() => onClickScale("plus")}><PlusIcon /></button>
          <div className="AltairImageViewer-reset" onClick={onClickReset}><ResetIcon /></div>
        </div>
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
    height: fit-content;
    grid-template-columns: 1fr 1fr;
    height: fit-content;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 13;
  }
  .left {
    width: fit-content;
  }
  .right {
    display: flex;
    justify-content: flex-end;
    width: fit-content;
    justify-self: end;
    .AltairImageViewer-closeButton {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 7px;
      box-sizing: border-box;
      height: fit-content;
      width: fit-content;
      @media (hover: hover) {
        background-color: ${({ theme }) => hexToRgbA(theme.colors.rose.L8, 0.2)};
      }
      @media (hover: none) {
        background-color: ${({ theme }) => hexToRgbA(theme.colors.rose.L8, 0.7)};
      }
      &:hover {
        background-color: ${({ theme }) => hexToRgbA(theme.colors.rose.L8, 0.7)};
      }
      height: 40px;
      width: 40px;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        height: 50px;
        width: 50px;
      }
      transition: 0.3s all ease-in-out;
      > svg {
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.colors.slate.L2};
      }
    }
  }
  .AltairImageViewer-content {
    display: grid;
    width: 100%;
    height: 100%;
    .AltairImageViewer-prev {
      left: 0;
    }
    .AltairImageViewer-next {
      right: 0;
    }
    .AltairImageViewer-prev, .AltairImageViewer-next {
      display: flex;
      position: absolute;
      align-items: center;
      height: 25px;
      width: 25px;
      justify-content: center;
      align-self: center;
      height: fit-content;
      padding: 30px 5px;
      cursor: pointer;
      z-index: 12;
      background-color: ${({ theme }) => hexToRgbA(theme.colors.primary.L2, 0.1)};
      &:hover {
        background-color: ${({ theme }) => hexToRgbA(theme.colors.primary.L2, 0.5)};
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        height: 40px;
        width: 40px;
        padding: 35px 7px;
      }
      transition: 0.3s all ease-in-out;
      > svg {
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.colors.slate.L2};
      }
    }
    .AltairImageViewer-ImagePages {
      display: flex;
      justify-self: center;
      align-self: center;
    }
    .AltairImageViewer-imageWrapper {
      display: flex;
      position: relative;
      justify-self: center;
      width: 100%;
      z-index: 1;
      .AltairImage-root {
        pointer-events: none;
        width: 99vw;
        height: calc(99vw / 16 * 9);
        @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
          width: 70vw;
          height: calc(70vw / 16 * 9);
        }
        overflow: hidden;
        transition: 0.3s all ease-in-out;
      }
    }
  }
  .AltairImageViewer-footer {
    display: flex;
    width: 100%;
    height: fit-content;
    position: absolute;
    background-color: ${({ theme }) => hexToRgbA(theme.colors.slate.L11, 0.5)};
    left: 0;
    bottom: 0;
    z-index: 11;
    .AltairImageViewer-NavPages {
      display: flex;
      gap: 5px;
      padding: 20px;
      width: 100%;
      box-sizing: border-box;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        padding: 20px 100px;
      }
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
    .AltairImageViewer-zoom {
      display: flex;
      align-items: center;
      position: absolute;
      left: 0;
      bottom: 50px;
      .AltairImageViewer-zoomMinus, .AltairImageViewer-zoomPlus, .AltairImageViewer-reset {
        display: flex;
        padding: 10px;
        outline: none;
        border: none;
        background-color: ${({ theme }) => hexToRgbA(theme.colors.primary.L2, 0.1)};
        &:hover {
          background-color: ${({ theme }) => hexToRgbA(theme.colors.primary.L2, 0.5)};
        }
        > svg {
          color: ${({ theme }) => theme.colors.text.L5};
          width: 25px;
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
            width: 30px;
          }
          transition: 0.3s all ease;
        }
        transition: 0.3s all ease;
      }
    }
  }
`
