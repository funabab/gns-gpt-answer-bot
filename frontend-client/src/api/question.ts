import useSWRMutation from 'swr/mutation'
import { api } from '.'
import { GetAnswerResponse } from '../validations/question'

export const useQuestionAnswerQuestionQuery = () => {
  const { trigger, isMutating, data, error } = useSWRMutation<
    GetAnswerResponse,
    any,
    any,
    {
      question: string
    }
  >('/question/getAnswer', (url: string, { arg: data }: { arg: any }) => {
    return api.post(url, data).then(({ data }) => GetAnswerResponse.parse(data))
  })

  return {
    data,
    error,
    getAnswer: trigger,
    isLoading: isMutating,
  }
}
