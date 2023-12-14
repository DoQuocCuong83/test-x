import clsx from 'clsx'
import { formatVal } from '../../helper/value'
import { INFORMATION_LIST } from './constant'
import classes from './index.module.css'

const InformationBox = () => {
  const informationList = INFORMATION_LIST.map(
    ({ value, unit, label }, index) => (
      <div key={index} className="text-center">
        <div className="text-[49px] text-bold-blue leading-[64px]">
          ${formatVal(value)}
          {unit}
        </div>
        <div className="mt-[13px] text-bold-grey leading-[24px] font-normal">
          {label}
        </div>
      </div>
    ),
  )

  return (
    <div
      className={clsx(
        classes.informationBox,
        'mt-[85px] mx-[16px] rounded-[20px] border border-white h-[190px] px-[107px] flex justify-between items-center',
      )}
    >
      {informationList}
    </div>
  )
}

export default InformationBox
