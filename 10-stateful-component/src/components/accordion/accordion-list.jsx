import accordionData from './data.json'
import { Component } from 'react'
import AccordionItem from './accordion-item'

export default function AccordionList() {
  return (
    <section>
      <h2>
        자주 묻는 질문
        <img
          src="/assets/tutor@2x.png"
          alt="피그마 튜터"
          width={43}
          height={43}
        />
      </h2>
      <dl>
        {accordionData.map((accordionItem) => (
          <AccordionItem
            key={accordionItem.id}
            question={accordionItem.question}
            answer={accordionItem.answer}
            isOpen={true}
          />
        ))}
      </dl>
    </section>
  )
}
