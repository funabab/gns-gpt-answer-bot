import React from 'react'
import ChatContent from './ChatContent'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

interface Props {}

const ChatContainer: React.FC<Props> = () => {
  return (
    <div className="bg-black w-full h-full">
      <div className="w-full h-full bg-green-900/20 flex flex-col">
        <ChatHeader />
        <main className="text-white w-full h-full  max-w-4xl mx-auto flex-1 min-h-0 overflow-auto border-x border-white/20 flex flex-col">
          <div className="flex-1 min-h-0 px-2 space-y-4 mt-4">
            <ChatContent />
            <ChatContent />
          </div>
          <ChatInput />
        </main>
      </div>
    </div>
  )
}

export default ChatContainer
