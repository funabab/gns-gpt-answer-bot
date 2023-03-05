import { QuestionProps } from '../typings'

export const parseQuestionContent = (
  question: string,
  selectedOption?: string,
): QuestionProps => {
  const splitQuestionContent = question.replace(/(\n\r?)+/g, '\n').split('\n')
  if (splitQuestionContent.length !== 9) {
    throw new Error('Invalid question content')
  }
  return {
    question: splitQuestionContent[0],
    options: Array.from({ length: 4 }).map((_val, index) => {
      const key = splitQuestionContent[1 + index * 2]
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase()

      return {
        key,
        value: splitQuestionContent[2 + index * 2],
        selected: key === selectedOption,
      }
    }),
  }
}
