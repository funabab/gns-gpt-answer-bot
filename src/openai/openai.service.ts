import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenaiService extends OpenAIApi {
  constructor() {
    super(
      new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      }),
    );
  }
}
