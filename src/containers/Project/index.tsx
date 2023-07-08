import React from 'react'
import { projects } from '../../utils/constants/projects'
import { AnimatePresence, type Variants, motion } from 'framer-motion'
import Image from '../../components/Image'
import { ReactComponent as ZoomInIcon } from '../../assets/icons/add-circle-outline.svg'
import { ReactComponent as GlobeIcon } from '../../assets/icons/grid.svg'
import ImageViewer from '../../components/ImageViewer'
import CircleGradientLoader from '../../components/Loading/CircleGradientLoader'
import { NavigationBtn, ProjectStyled, ProjectWrapper } from './ProjectStyled'

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
        <div className="preview">
          <AnimatePresence mode="popLayout">
            {projects.map((item) => item.id === preview.key && (
              <ProjectWrapper key={item.id} variants={previewVariants} initial={preview.type} animate="show" exit={preview.type} >
                <div className="preview-image">
                  <AnimatePresence mode="popLayout">
                    {project?.images.map((img, idx) => idx === image && (
                      <motion.div
                        key={img}
                        className="current-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        layoutId="image-viewer"
                        onClick={() => !project.development && setShowImage(true)}
                      >
                        {!project.development && <div className="image-zoom"><div className="zoom-icon"><ZoomInIcon />Full-Screen</div></div>}
                        {project.development && <div className="under-development"><div className="dev-icon"><CircleGradientLoader />Under Development</div></div>}
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
                  <div className="project-type"><GlobeIcon />{project?.projectType} <span>|</span> <span>{project?.role}</span></div>
                  <p className="description">{project?.description}</p>
                  <div className="techs">
                    <p>Techs</p>
                    <div>
                      {project?.techs.map((tech) => (
                        <p key={tech}>{tech}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </ProjectWrapper>
            ))}
          </AnimatePresence>
        </div>
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
    </ProjectStyled>
  )
}

export default Project
