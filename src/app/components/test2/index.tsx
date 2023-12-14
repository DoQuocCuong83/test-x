import { CONTENTS } from './constant'

const Test2 = () => {
  const contents = CONTENTS.map((content, index) => (
    <li key={index}>{content}</li>
  ))

  return (
    <div className="pt-[176px] px-[130px] text-white text-[28px] font-bold leading-[28px]">
      <div className="pl-[31.14px]">
        <ol>{contents}</ol>
      </div>
      <div className="mt-[90px]">CONGRATS ON PASSING THE CODING INTERVIEW!</div>
    </div>
  )
}

export default Test2
