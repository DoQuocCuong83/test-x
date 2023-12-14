import logo from '@/public/img/logo.png'
import clsx from 'clsx'
import Image from 'next/image'
import classes from './index.module.css'

const TestInterviewBox = () => {
  return (
    <div
      className={clsx(
        classes.testInterviewBox,
        'w-[225px] h-[121px] bg-white rounded-[20px] mr-[80px] mt-[98px] flex flex-col items-center',
      )}
    >
      <Image src={logo} alt="logo" width={104} className="mt-[34px]" />
      <div className="text-light-grey font-normal text-xs leading-[24px]">
        test Front end interview 1
      </div>
    </div>
  )
}

export default TestInterviewBox
