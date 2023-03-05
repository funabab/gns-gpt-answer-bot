import { Injectable } from '@nestjs/common';
import { OpenaiService } from 'src/openai/openai.service';

@Injectable()
export class QuestionService {
  constructor(private readonly openaiService: OpenaiService) {}
  async getAnswer(question: string) {
    const answer = await this.openaiService.answerSocialQuestion(question);
    return {
      question,
      answer,
    };
  }
}
