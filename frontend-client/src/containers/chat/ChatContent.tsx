import React from 'react'
import clsx from 'clsx'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { QuestionProps } from '../../typings'

interface Props {
  question: QuestionProps
}

const ChatContent: React.FC<Props> = ({ question: { question, options } }) => {
  return (
    <div className="bg-white/20 p-4 rounded text-neutral-100 animate-in fade-in-30 zoom-in-[0.8] duration-500">
      <p>{question}</p>

      <ul className="text-sm space-y-1 mt-4 ml-2">
        {options.map((option) => (
          <li
            key={option.key}
            className={clsx('flex gap-x-2 items-center', {
              'font-extrabold text-white': option.selected,
            })}
          >
            <span>{option.key}.</span> <span>{option.value}</span>{' '}
            {option.selected && (
              <BsFillCheckSquareFill className="text-green-400" />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChatContent
