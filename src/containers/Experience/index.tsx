import { type Variants, motion } from 'framer-motion'
import { styled } from 'styled-components'

const Experience = () => {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <ExperienceStyled variants={variants} initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.3 }}>
      <h1>Coming soon..</h1>
    </ExperienceStyled>
  )
}

export default Experience

const ExperienceStyled = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  > h1 {
    color: ${({theme})=>theme.colors.text.L5};
  }
`
