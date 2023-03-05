import React, { useState } from 'react'
import ChatContent from './ChatContent'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

export interface QuestionProps {
  question: string
  options: {
    key: string
    value: string
    selected?: boolean
  }[]
}

interface Props {}

const ChatContainer: React.FC<Props> = () => {
  const [contents, setContents] = useState<QuestionProps[]>([])

  return (
    <div className="bg-black w-full h-full">
      <div className="w-full h-full bg-green-900/20 flex flex-col">
        <ChatHeader />
        <main className="text-white w-full h-full  max-w-4xl mx-auto flex-1 min-h-0 overflow-auto border-x border-white/20 flex flex-col">
          <div className="flex-1 min-h-0 px-2 space-y-4 mt-4">
            {contents.map((content, index) => (
              <ChatContent key={index} question={content} />
            ))}
          </div>
          <ChatInput />
        </main>
      </div>
    </div>
  )
}

export default ChatContainer
