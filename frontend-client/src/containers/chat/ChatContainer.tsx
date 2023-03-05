import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useQuestionAnswerQuestionQuery } from '../../api/question'
import { QuestionProps } from '../../typings'
import { parseQuestionContent } from '../../utils/question'
import ChatContent from './ChatContent'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

interface Props {}

const ChatContainer: React.FC<Props> = () => {
  const [contents, setContents] = useState<QuestionProps[]>([])
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const {
    isLoading: isAnswerLoading,
    data: answerResponse,
    getAnswer,
  } = useQuestionAnswerQuestionQuery()

  const handleInputSubmit = useCallback((question: string) => {
    try {
      getAnswer({ question })
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    contentContainerRef.current?.scrollTo({
      top: contentContainerRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [contents])

  useEffect(() => {
    if (answerResponse) {
      try {
        setContents((content) => [
          ...content,
          parseQuestionContent(answerResponse.question, answerResponse.answer),
        ])
      } catch (e) {
        console.error(e)
      }
    }
  }, [answerResponse])

  return (
    <div className="bg-black w-full h-full">
      <div className="w-full h-full bg-green-900/20 flex flex-col">
        <ChatHeader />
        <main className="text-white w-full h-full  max-w-4xl mx-auto flex-1 min-h-0 overflow-auto border-x border-white/20 flex flex-col">
          <div
            className="flex-1 min-h-0 px-2 space-y-4 mt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600"
            ref={contentContainerRef}
          >
            {contents.map((content, index) => (
              <ChatContent key={index} question={content} />
            ))}
          </div>
          <ChatInput onSubmit={handleInputSubmit} isLoading={isAnswerLoading} />
        </main>
      </div>
    </div>
  )
}

export default ChatContainer
