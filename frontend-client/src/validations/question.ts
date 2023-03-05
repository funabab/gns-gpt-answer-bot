import { z } from 'zod'

export const GetAnswerResponse = z.object({
  question: z.string(),
  answer: z.string(),
})

export type GetAnswerResponse = z.infer<typeof GetAnswerResponse>
