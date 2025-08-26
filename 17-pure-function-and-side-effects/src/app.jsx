import { useState } from 'react'
import { LearnSection } from '@/components'
import RandomCountUp from '@/demo/app'

// 컴포넌트 외부 요인
const friends = ['명진', '준수', '현우']

export default function App() {
  console.log('App 렌더링')

  const [key, setKey] = useState(0)

  // 변형(mutation)
  const friend = friends.splice(0, 1)
  console.log({ friend, friends })

  return (
    <LearnSection title="랜덤 카운트 업">
      <output>{friends.join(', ')}</output>
      <button
        type="button"
        className="button my-2"
        onClick={() => setKey((k) => k + 1)}
      >
        change key
      </button>
      <RandomCountUp key={key} />
    </LearnSection>
  )
}
