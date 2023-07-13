import React from 'react'
import { NavLink, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { MenuStyled } from './MenuStyled'
import { type TRootLoaderData } from '../../containers/Root/Root.types'
import { AnimatePresence, type Variants, motion } from 'framer-motion'
import ThemeButton from '../ThemeButton'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import ResumeBtn from '../Atoms/ResumeBtn'

interface TLinkClass { isActive: boolean, isPending: boolean }

const Menu = () => {
  const location = useLocation()
  const { menu } = useLoaderData() as TRootLoaderData
  const [activeMenu, setActiveMenu] = React.useState(false)
  const refButton = React.useRef<HTMLDivElement>(null)
  const refContent = React.useRef<HTMLUListElement>(null)
  const navigate = useNavigate()


  React.useEffect(() => {
    const listener = (event: any) => {
      if ([refButton, refContent].every((ref) => {
        return ref?.current !== null && !ref.current.contains(event.target)
      })) setActiveMenu(false)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    document.addEventListener('keyup', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
      document.addEventListener('keyup', listener)
    }
  }, [refButton, refContent])

  const linkClass = (args: TLinkClass) => {
    return args.isActive ? 'active' : args.isPending ? 'pending' : ''
  }

  const isHome = location.pathname === '/home'

  const mbToggleVariants: Variants = {
    show: { opacity: 1, y: 35 },
    hidden: { opacity: 0, y: 20 }
  }

  return (
    <MenuStyled initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }}>
      <div className="left">
        <motion.div className="title" animate={{ opacity: !isHome ? 1 : 0 }} onClick={() => navigate("/home")}>
          <p>{'<MuhammadLuqmanulHakim />'}</p>
          <p>Frontend Developer</p>
        </motion.div>
      </div>
      <div className="mobile-menu">
        <motion.div ref={refButton} className="mobile-menu-toggle" onClick={() => { setActiveMenu((prev) => !prev) }}>
          <MenuIcon />
        </motion.div>
        <AnimatePresence>
          {activeMenu && (
            <motion.ul ref={refContent} className="mobile-menu-content" variants={mbToggleVariants} initial="hidden" animate="show" exit="hidden">
              {menu.map((value) => (
                <li key={value.key}>
                  <NavLink
                    to={value.pathname}
                    className={linkClass}
                    onClick={() => { setActiveMenu(false) }}
                  >
                    <button className="menu-button">{value.label}</button>
                  </NavLink>
                  <div className="shadow" />
                </li>
              ))}
              <ThemeButton />
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <div className="menu">
        <ul>
          {menu.map((value) => (
            <li key={value.key}>
              <NavLink
                to={value.pathname}
                className={linkClass}
              >
                <button className="menu-button">{value.label}</button>
              </NavLink>
              <div className="shadow" />
            </li>
          ))}
        </ul>
        <div className="theme">
          <ThemeButton />
        </div>
        <motion.div className="resume" animate={!isHome ? { maxWidth: 200, opacity: 1 } : { maxWidth: 0, opacity: 0 }}>
          <ResumeBtn />
        </motion.div>
      </div>
    </MenuStyled>
  )
}

export default Menu
