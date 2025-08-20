import { Fragment } from 'react'
import './accordion-item.css'

/**
 * AccordionItem 컴포넌트
 * @param {Object} props
 * @param {string} props.question - 자주 묻는 질문
 * @param {string} props.answer - 답변
 * @param {boolean} props.isOpen - 아코디언 아이템 열림/닫힘 여부
 */
export default function AccordionItem({ question, answer, isOpen = false }) {
  const buttonLabel = isOpen ? '닫힘' : '열림'

  return (
    <Fragment>
      <dt>
        {question} <button type="button">{buttonLabel}</button>
      </dt>
      <dd hidden={!isOpen}>{answer}</dd>
    </Fragment>
  )
}
