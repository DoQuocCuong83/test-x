import petra from '@/public/svg/petra.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from '../components/common/Button'
import { SESSION_STORAGE_KEY } from '../constant/common'
import {
  connectWallet,
  ellipsisAddressWallet,
  getAccountWallet,
  getAptosWallet,
} from '../helper/wallet'
import { NAV_BAR_MENU } from './constant'
import classes from './index.module.css'

const NavBar = () => {
  const [addressWallet, setAddressWallet] = useState('')

  useEffect(() => {
    const sessionAddressWallet = sessionStorage.getItem(
      SESSION_STORAGE_KEY.ADDRESS_WALLET,
    )
    if (sessionAddressWallet) {
      setAddressWallet(sessionAddressWallet)
    }
  }, [])

  const connect = async () => {
    const wallet = getAptosWallet()
    if (wallet) {
      await connectWallet(wallet)
      const account = await getAccountWallet(wallet)
      if (account) {
        setAddressWallet(account.address)
        sessionStorage.setItem(
          SESSION_STORAGE_KEY.ADDRESS_WALLET,
          account.address,
        )
      }
    }
  }

  const navBarMenu = NAV_BAR_MENU.map(({ label, path }, index) => (
    <Link key={index} href={path} className="text-bold-grey font-bold text-sm">
      {label}
    </Link>
  ))

  const btnWallet = addressWallet ? (
    <Button
      text={
        <>
          <Image src={petra} alt="icon" width={27} className="mr-[4px]" />
          <div className="text-bold-blue font-bold leading-[22px] pt-[2px]">
            {ellipsisAddressWallet(addressWallet)}
          </div>
        </>
      }
      appendClasses="bg-white w-[203px] h-[30px]"
    />
  ) : (
    <Button
      text="Connect Wallet →"
      appendClasses="bg-white w-[203px] h-[30px]"
      onClick={connect}
    />
  )

  return (
    <div className="h-full flex items-center">
      <div
        className={clsx(
          'w-[821px] h-[45px] rounded-xl py-[7.5px] pr-[14px] pl-[32px] flex',
          classes.navBar,
        )}
      >
        <div className="flex-1 pr-[92px] flex justify-between items-center">
          {navBarMenu}
        </div>
        {btnWallet}
      </div>
    </div>
  )
}

export default NavBar
