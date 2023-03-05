import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import {
  contextPrompts,
  createSocialQuestionPrompt,
} from './prompts/chat.prompt';

@Injectable()
export class OpenaiService extends OpenAIApi {
  constructor() {
    super(
      new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      }),
    );
  }

  async answerSocialQuestion(question: string): Promise<string> {
    const response = await this.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0,
      top_p: 1,
      max_tokens: 50,
      frequency_penalty: 0,
      presence_penalty: 0,
      messages: [...contextPrompts, createSocialQuestionPrompt(question)],
    });

    return response.data.choices[0].message.content
      .replace(/[^a-zA-Z0-9]/g, '')
      .toLowerCase()[0];
  }
}
