import React, { Suspense, useState } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router/AppRouter'
import { Navbar } from 'widgets/navbar'
import { useTheme } from 'app/providers/themeProvider'
import { Sidebar } from 'widgets/sidebar'
import { Modal } from 'widgets/modal/ui/Modal'

export function App() {
  const { theme } = useTheme()

  const [isOpen, setIsOpen] = useState(false)

  const toggleHandle = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Modal isOpen={isOpen} onClose={toggleHandle}>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor doloremque facere libero magni necessitatibus nobis numquam rem
          rerum sequi velit.
        </Modal>
        <Navbar />
        <button onClick={toggleHandle}>toggle</button>
        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>

    </div>
  )
}
