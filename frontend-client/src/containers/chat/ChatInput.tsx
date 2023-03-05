import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'

interface Props {
  onSubmit?: (question: string) => void
  isLoading?: boolean
}

const ChatInput: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const [input, setInput] = useState('')
  return (
    <div className="min-w-0">
      <textarea
        rows={5}
        className="w-full bg-black p-4 outline-none resize-none [150px] text-white block scrollbar-thin scrollbar-thumb-gray-200 disabled:bg-gray-900/40 transition"
        onChange={(e) => {
          setInput(e.target.value)
        }}
        value={input}
        disabled={isLoading}
      ></textarea>
      <div className="px-1 mt-1">
        <button
          className="bg-green-900 text-white p-4 rounded hover:enabled:bg-green-900/80 transition justify-center font-bold w-full disabled:opacity-70 flex items-center gap-x-2"
          onClick={() => {
            onSubmit?.(input)
            setInput('')
          }}
          disabled={isLoading}
        >
          <span>Get Answer</span>
          {isLoading && <FaSpinner className="animate-spin" />}
        </button>
      </div>
    </div>
  )
}

export default ChatInput
