import { useState } from 'react'
import { LearnSection } from '@/components'

export default function App() {
  const [isVisible, setIsVisible] = useState(true)
  const handleInput = (e) => setIsVisible(e.target.checked)

  return (
    <LearnSection
      className="p-10"
      title="컴포넌트 라이프사이클(생명주기: 탄생(mount) -> 성장(update) -> 죽음(unmount))"
    >
      <label className="flex gap-1 items-center">
        <input
          type="checkbox"
          name="is-visible"
          checked={isVisible}
          onChange={handleInput}
        />
        Child 컴포넌트 표시 ({isVisible.toString()})
      </label>
      <Child />
    </LearnSection>
  )
}

function Child() {
  return (
    <article className="mt-5 p-5 border-2 border-inherit">
      <h2>Child 컴포넌트</h2>
    </article>
  )
}
