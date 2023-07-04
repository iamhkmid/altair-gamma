import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Overview from './containers/Overview'
import Project from './containers/Project'
import ErrorElement from './containers/ErrorElement'
import Root, { RootLoader } from './containers/Root'
import ThemeProvider from './utils/ThemeProvider'
import { GlobalStyle } from './utils/ThemeProvider/GlobalStyle'
import Experience from './containers/Experience'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: RootLoader,
    errorElement: <ErrorElement />,
    children: [
      {
        path: 'home',
        element: <Overview />
      },
      {
        path: 'project',
        element: <Project />
      },
      {
        path: 'experience',
        element: <Experience />
      }
    ]
  }
])

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
