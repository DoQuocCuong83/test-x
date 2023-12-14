import clsx from 'clsx'
import { CSSProperties, MouseEventHandler, ReactNode } from 'react'

interface IProps {
  text: string | ReactNode
  appendStyle?: CSSProperties
  appendClasses?: string
  onClick?: MouseEventHandler
  disabled?: boolean
}

const Button = ({
  text,
  appendStyle,
  appendClasses,
  onClick,
  disabled,
}: IProps) => {
  return (
    <button
      className={clsx(
        'rounded-[32px] flex items-center justify-center cursor-pointer text-bold-blue font-bold',
        appendClasses,
      )}
      style={appendStyle}
      onClick={!disabled ? onClick : undefined}
    >
      {text}
    </button>
  )
}

export default Button
