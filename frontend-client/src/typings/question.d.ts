export interface QuestionProps {
  question: string
  options: {
    key: string
    value: string
    selected?: boolean
  }[]
}
