import React from 'react'
import { styled } from 'styled-components'
import Shimmer from '../Loading/Shimmer'
import { hexToRgbA } from '../../utils/hexToRgbA'
import { AnimatePresence, motion } from 'framer-motion'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & { alt: string }

const Image: React.FC<ImageProps> = (props) => {
  const [loading, setLoading] = React.useState(true)

  return (
    <Main className="AltairImage-root">
      <AnimatePresence>
        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Shimmer />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }}>
        <img {...props} alt={props.alt} onLoad={() => { setLoading(false) }} />
      </motion.div>
    </Main>
  )
}

export default Image

Image.defaultProps = {
  alt: 'img'
}

const Main = styled.div`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => hexToRgbA(theme.colors.text.L1, 0.2)};
  > div {
    display: flex;
  }
`
