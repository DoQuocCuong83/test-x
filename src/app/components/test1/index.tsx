import GroupButton from './GroupButton'
import InformationBox from './InformationBox'
import TestInterviewBox from './TestInterviewBox'
import Title from './Title'

const Test1 = () => {
  return (
    <main>
      <div className="flex justify-between">
        <div>
          <Title />
          <GroupButton />
        </div>
        <TestInterviewBox />
      </div>
      <InformationBox />
    </main>
  )
}

export default Test1
