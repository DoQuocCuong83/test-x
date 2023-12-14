import logoRemoveBg from '@/public/img/logoRemoveBg.png'
import Image from 'next/image'

const Title = () => {
  return (
    <div className="ml-[36px] pt-[14px] w-[599px] h-[255px] text-white text-[69px] leading-[80px] flex items-end relative">
      Explore and Earn on
      <Image
        src={logoRemoveBg}
        alt="logo"
        width={204}
        className="absolute left-[100px] bottom-[6px]"
      />
    </div>
  )
}

export default Title
