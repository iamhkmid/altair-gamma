import React from 'react'
import { type LoaderFunctionArgs, redirect, useLocation, useOutlet } from 'react-router-dom'
import { styled } from 'styled-components'
import Menu from '../../components/Menu'
import { menu } from '../../utils/constants/menu'
import GlowBg from '../../components/GlowBg'
import { AnimatePresence, motion } from 'framer-motion'
import { getbrowserName } from '../../utils/checkBrowser'
import Footer from '../../components/Footer'

export const RootLoader = (args: LoaderFunctionArgs) => {
  // console.log(getbrowserName())  
  const url = new URL(args.request.url)
  if (url.pathname === '/') return redirect('/home')
  return { menu }
}

const AnimatedOutlet: React.FC = () => {
  const o = useOutlet()
  const [outlet] = React.useState(o)
  return <>{outlet}</>
}

const Root = () => {
  const location = useLocation()

  return (
    <RootStyled>
      <Menu />
      <AnimatePresence mode="popLayout">
        <motion.div className="animate-wrapper" key={location.pathname}>
          <AnimatedOutlet />
          <Footer />
          <GlowBg />
        </motion.div>
      </AnimatePresence>
    </RootStyled>
  )
}

export default Root

const RootStyled = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  .animate-wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`
