import useSWRMutation from 'swr/mutation'
import { api } from '.'

export const getQuestionAnswerQuestionQuery = () => {
  const { trigger, isMutating, data, error } = useSWRMutation(
    '/api/question',
    (url, { arg: data }) => {
      return api.post(url, data, {
        method: 'POST',
      })
    },
  )

  return {
    data,
    error,
    getAnswer: trigger,
    isLoading: isMutating,
  }
}
