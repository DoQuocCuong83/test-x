import clsx from 'clsx'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { MouseEventHandler } from 'react'
import { AUTHENTIC_STATUS } from '../../constant/common'
import { ROUTERS } from '../../constant/router'
import Button from '../common/Button'
import classes from './index.module.css'

const GroupButton = () => {
  const { push } = useRouter()

  const authInformation = useSession()

  const handleSignIn: MouseEventHandler = () => {
    signIn('google')
  }

  const handleSignOut: MouseEventHandler = () => {
    signOut()
  }

  const goToTest2: MouseEventHandler = () => {
    push(ROUTERS.TEST_2)
  }

  const isLogin = authInformation.status === AUTHENTIC_STATUS.AUTHENTICATED

  const userInfo = isLogin && (
    <div className="mt-[10px] text-bold-blue">
      {authInformation.data?.user?.name} - {authInformation.data?.user?.email}
    </div>
  )

  const textButtonAuthentication = isLogin ? 'Log out' : 'Login'

  const onClickAuthentication = isLogin ? handleSignOut : handleSignIn

  return (
    <div className="ml-[36px]">
      <div className="mt-[30px] bg-white w-[423px] h-[40px] rounded-[32px] py-[5px] pr-[9px] flex justify-end">
        <Button
          text="Sign up"
          appendClasses="h-full bg-light-pink w-[118px] text-bold-blue font-normal"
        />
      </div>
      {userInfo}
      <div className="mt-[21.25px] w-[423px] flex justify-between">
        <Button
          text={textButtonAuthentication}
          appendClasses="w-[174px] h-[40px] text-white bg-light-blue font-bold"
          onClick={onClickAuthentication}
        />
        <Button
          text="Launch App"
          appendClasses={clsx(
            classes.btnLaunchApp,
            'w-[203px] h-[40px] text-bold-blue bg-white font-bold',
            isLogin ? 'cursor-pointer' : 'cursor-not-allowed',
          )}
          onClick={goToTest2}
          disabled={!isLogin}
        />
      </div>
    </div>
  )
}

export default GroupButton
