import React from 'react'

interface Props {}

const ChatInput: React.FC<Props> = () => {
  return (
    <div className="min-w-0">
      <textarea
        rows={5}
        className="w-full bg-black p-4 outline-none resize-none [150px] text-white block"
      ></textarea>
      <div className="px-1 mt-1">
        <button className="bg-green-900 block text-white p-4 rounded hover:bg-green-900/80 transition font-bold w-full">
          Get Answer
        </button>
      </div>
    </div>
  )
}

export default ChatInput
