import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionService {
  getAnswer(question: string) {
    return {
      question,
      answer: 'b',
    };
  }
}
