import { css, styled } from 'styled-components'
import { projects } from '../../utils/constants/projects'
import React from 'react'
import { AnimatePresence, type Variants, motion } from 'framer-motion'
import { hexToRgbA } from '../../utils/hexToRgbA'
import Image from '../../components/Image'
import { ReactComponent as ZoomInIcon } from '../../assets/icons/add-circle-outline.svg'
import ImageViewer from '../../components/ImageViewer'

const Project = () => {
  const [preview, setPreview] = React.useState({ key: '1', type: 'next' })
  const [image, setImage] = React.useState(0)
  const [showImage, setShowImage] = React.useState(false)
  const project = projects.find((value) => value.id === preview.key)

  const srcImgViewer = React.useMemo(() => (projects.find((item) => item.id === preview.key)?.images) || [], [preview.key])

  const navigation = React.useMemo(() => {
    const prevIdx = projects.findIndex((item) => item.id === preview.key) - 1
    const nextIdx = projects.findIndex((item) => item.id === preview.key) + 1

    return {
      prev: prevIdx >= 0 && prevIdx <= projects.length ? projects[prevIdx] : null,
      next: nextIdx >= 0 && nextIdx <= projects.length ? projects[nextIdx] : null
    }
  }, [preview])

  const onClickNav = (type: 'prev' | 'next') => {
    setImage(0)
    setPreview({ key: type === 'prev' ? navigation.prev?.id! : navigation.next?.id!, type })
  }

  const previewVariants: Variants = {
    prev: { opacity: 0, right: 30 },
    next: { opacity: 0, left: 30 },
    show: { opacity: 1, left: 0, right: 0 }
  }

  return (
    <ProjectStyled>
      {showImage && <ImageViewer src={srcImgViewer} currentIdx={image} onClose={() => { setShowImage(false) }} />}
      <div className="content">
        <AnimatePresence mode="popLayout">
          {projects.map((item) => item.id === preview.key && (
            <ProjectWrapper key={item.id} variants={previewVariants} initial={preview.type} animate="show" exit={preview.type} >
              <div className="preview-image">
                <AnimatePresence mode="popLayout">
                  {project?.images.map((img, idx) => idx === image && (
                    <motion.div
                      key={img}
                      className="current-image"
                      variants={previewVariants}
                      initial={preview.type}
                      animate="show"
                      exit={preview.type}
                      layoutId="image-viewer"
                      onClick={() => { setShowImage(true) }}
                    >
                      <div className="image-zoom"><div className="zoom-icon"><ZoomInIcon />Full-Screen</div></div>
                      <Image src={img} alt="img" />
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div className="image-list">
                  {project?.images.map((img, idx) => (
                    <div className={`image-wrapper ${idx === image ? 'active' : ''}`} key={img} onClick={() => { setImage(idx) }}>
                      <Image src={img} alt="img" />
                      {idx === image && <motion.div className="selected-img" layoutId="selected-img" />}
                    </div>
                  ))}
                </div>
              </div>
              <div className="preview-detail">
                <p className="title">{project?.title}</p>
                <p className="description">{project?.description}</p>
              </div>
            </ProjectWrapper>
          ))}
        </AnimatePresence>
        <div className="navigation-root">
          <div className="navigation-page-wrapper">
            {projects.map((val) => (
              <div className="navigation-page" key={val.id}>
                {val.id === preview.key && <motion.div layoutId="navigation-page" />}
              </div>
            ))}
          </div>
          <div className="navigation-button-wrapper">
            <NavigationBtn onClick={() => { onClickNav('prev') }} $type="prev" $disabled={navigation.prev == null}>
              <p>Previous</p>
              <AnimatePresence>
                {!(navigation.prev == null) && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{navigation.prev?.title}</motion.p>
                )}
              </AnimatePresence>
            </NavigationBtn>
            <NavigationBtn onClick={() => { onClickNav('next') }} $type="next" $disabled={navigation.next == null}>
              <p>Next</p>
              <AnimatePresence>
                {!(navigation.next == null) && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{navigation.next?.title}</motion.p>
                )}
              </AnimatePresence>
            </NavigationBtn>
          </div>
        </div>
      </div>
    </ProjectStyled >
  )
}

export default Project

const ProjectStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
      padding: 0 12vw;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
      padding: 0 13vw;
    }
    display: flex;
    flex-direction: column;
    gap: 40px;
    .navigation-root {
      display: flex;
      flex-direction: column;
      gap: 10px;
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
      }
    }
  }
`

const ProjectWrapper = styled(motion.div)`
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
    .current-image {
      box-sizing: border-box;
      width: 100%;
      height: calc(100vw / 16 * 9 - 20px);
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        width: 400px;
        height: calc(400px / 16 * 9);
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        width: 600px;
        height: calc(600px / 16 * 9);
      }
      position: relative;
      border-radius: 5px;
      overflow: hidden;
      &:hover {
        .image-zoom {
          opacity: 1;
        }
      }
      .AltairImage-root {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
        transition: 0.3s all ease-in-out;
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
        transition: 0.2s all ease-in-out;
        .zoom-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          color: ${({ theme }) => theme.colors.slate.L2};
          padding: 5px 10px;
          font-size: 12px;
          font-weight: 500;
          height: fit-content;
          width: fit-content;
          border-radius: 10px;
          background-color: ${({ theme }) => hexToRgbA(theme.colors.slate.L11, 0.8)};
          svg {
            width: 20px;
            stroke-width: 6px;
          }
          -webkit-user-select: none; /* Safari */
          -ms-user-select: none; /* IE 10 and IE 11 */
          user-select: none; /* Standard syntax */
        }
      }
    }
    .image-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      .image-wrapper{
        position: relative;
        margin-bottom: 10px;
        --numOfView: 5;
        width: calc((100vw - 61px) / var(--numOfView));
        height: calc((100vw - 61px) / var(--numOfView) / 16 * 9);
        @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
          width: 70px;
          height: calc(70px / 16 * 9);
        }
        @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
          width: 100px;
          height: calc(100px / 16 * 9);
        }
        &.active {
          opacity: 1;
        }
        .AltairImage-root {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          overflow: hidden;
          transition: 0.3s all ease-in-out;
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
          position: relative;
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
    gap: 10px;
    .title {
      color: ${({ theme }) => theme.colors.text.L5};
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
        font-size: 25px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        font-size: 33px;
      }
    }
    .description {
      color: ${({ theme }) => theme.colors.text.L4};
      margin: 0;
      font-size: 10px;
      font-weight: 300;
      height: 50px;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
        font-size: 13px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        font-size: 16px;
      }
    }
  }
`
interface TNavigationBtn {
  $type: 'prev' | 'next'
  $disabled: boolean
}
const NavigationBtn = styled.div<TNavigationBtn>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  position: relative;
  cursor: pointer;
  width: fit-content;
  border-radius: 5px;
  padding: 10px;
  gap: 5px;
  width: 100%;
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
    font-size: 14px;
    font-weight: 700;
    transition: 0.3s all ease-in-out;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
      font-size: 14px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
      font-size: 18px;
    }
  }
  > p:nth-child(2){
    color: ${({ theme }) => theme.colors.text.L3};
    margin: 0;
    font-size: 13px;
    font-weight: 400;
    transition: 0.3s all ease-in-out;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
      font-size: 13px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
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
