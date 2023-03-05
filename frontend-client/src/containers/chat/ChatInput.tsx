import React, { useState } from 'react'

interface Props {
  onSubmit?: (question: string) => void
}

const ChatInput: React.FC<Props> = ({ onSubmit }) => {
  const [input, setInput] = useState('')
  return (
    <div className="min-w-0">
      <textarea
        rows={5}
        className="w-full bg-black p-4 outline-none resize-none [150px] text-white block"
        onChange={(e) => {
          setInput(e.target.value)
        }}
      >
        {input}
      </textarea>
      <div className="px-1 mt-1">
        <button
          className="bg-green-900 block text-white p-4 rounded hover:bg-green-900/80 transition font-bold w-full"
          onClick={() => {
            onSubmit?.(input)
          }}
        >
          Get Answer
        </button>
      </div>
    </div>
  )
}

export default ChatInput
