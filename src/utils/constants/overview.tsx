import React from 'react'
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'
import { ReactComponent as Github } from '../../assets/icons/github.svg'

interface TOverviewData {
  text1: string
  text2: string[]
  description: string
  action: Array<{
    key: string
    variant: 'text'
    label: string
    url: string
    particles: number
    animation?: boolean
  } |
  {
    key: string
    variant: 'icon'
    label: string
    url: string
    icon: React.ReactElement
    particles: number
    animation?: boolean
  }>
}

export const overviewData: TOverviewData = {
  text1: "Hi, I'm Luqman",
  text2: ['A', 'FRONTEND', 'WEB', 'DEVELOPER'],
  description: 'Experience helping companies create and maintain code for building interactive and user friendly web application.',
  action: [
    {
      key: '1',
      variant: 'text',
      label: 'Contact me',
      url: 'https://wa.link/i42azx',
      particles: 15,
      animation: true
    },
    {
      key: '2',
      variant: 'icon',
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/iamhkmid/',
      icon: <Linkedin />,
      particles: 10
    },
    {
      key: '3',
      variant: 'icon',
      label: 'Instagram',
      url: 'https://www.instagram.com/iamhkmid/',
      icon: <Instagram />,
      particles: 10
    },
    {
      key: '4',
      variant: 'icon',
      label: 'Github',
      url: 'https://github.com/iamhkmid',
      icon: <Github />,
      particles: 10
    }
  ]
}
