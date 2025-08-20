import { Fragment, useState } from 'react'
import './style.css'

/**
 * UpdateInput 컴포넌트
 * @param {Object} props
 * @param {string} props.label - 인풋 요소의 레이블
 */
export default function UpdateInput({ label }) {
  console.log('UpdateInput 컴포넌트 렌더링')

  // 리액트 훅 함수를 사용해 함수형 컴포넌트의 상태 관리
  const [username, setUsername] = useState('야무') // [state, setState]

  // 이벤트 리스너
  const handleInput = (e) => {
    const nextUsername = e.target.value
    setUsername(nextUsername)
  }

  return (
    <Fragment>
      <div className="update-input">
        <label htmlFor="update-input">{label}</label>
        {/* uncontrolled component */}
        <input
          id="update-input"
          type="text"
          defaultValue={username}
          onInput={handleInput}
        />
      </div>
      <output>{username}</output>
    </Fragment>
  )
}
