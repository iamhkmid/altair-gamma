import React from 'react'
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'
import { ReactComponent as Github } from '../../assets/icons/github.svg'
import { ReactComponent as Download } from '../../assets/icons/download-outline.svg'

interface TOverviewData {
  text1: string
  text2: string[]
  description: string
  resume: {
    label: string
    url: string
    endIcon: React.ReactElement | null
  }
  action: Array<{
    key: string
    label: string
    isFile?: boolean
    particles: number
    url: string
    animation?: boolean
  } & (
      {
        variant: "text"
        endIcon: React.ReactElement | null
      } |
      {
        key: string
        variant: 'icon'
        icon: React.ReactElement
      }
    )>
}

export const overviewData: TOverviewData = {
  text1: "Hi, I'm Luqman",
  text2: ['A', 'FRONTEND', 'WEB', 'DEVELOPER'],
  description: 'Experience helping companies create and maintain code for building interactive and user friendly web application.',
  resume: {
    label: 'Resume',
    url: "/static/resume-luqman.pdf",
    endIcon: <Download />,
  },
  action: [
    {
      key: '1',
      variant: 'text',
      label: 'Contact me',
      url: 'https://wa.link/i42azx',
      endIcon: null,
      particles: 15,
      animation: true
    },
    {
      key: '3',
      variant: 'icon',
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/iamhkmid/',
      icon: <Linkedin />,
      particles: 10
    },
    {
      key: '4',
      variant: 'icon',
      label: 'Instagram',
      url: 'https://www.instagram.com/iamhkmid/',
      icon: <Instagram />,
      particles: 10
    },
    {
      key: '5',
      variant: 'icon',
      label: 'Github',
      url: 'https://github.com/iamhkmid',
      icon: <Github />,
      particles: 10
    }
  ]
}
