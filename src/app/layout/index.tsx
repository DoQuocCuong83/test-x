import logo from '@/public/img/logo.png'
import clsx from 'clsx'
import Image from 'next/image'
import { ReactNode } from 'react'
import NavBar from './NavBar'
import classes from './index.module.css'

interface IProps {
  children: ReactNode
}

const Layout = ({ children }: IProps) => {
  const heightNavBar = 146
  const heightMainContent = `calc(100% - ${heightNavBar}px)`

  return (
    <div className="h-full">
      <div
        className={`bg-white pl-[36px] pr-[11px] flex justify-between items-center`}
        style={{ height: heightNavBar }}
      >
        <Image src={logo} alt="logo" width={260} />
        <NavBar />
      </div>
      <div
        style={{ minHeight: heightMainContent }}
        className={clsx(classes.mainContentContainer, 'pb-[30px]')}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout
