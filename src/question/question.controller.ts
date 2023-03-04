import { Body, Controller, Post } from '@nestjs/common';
import { QuestionDTO } from './dtos/question.dto';

@Controller('question')
export class QuestionController {
  @Post('getAnswer')
  getQuestionAnswer(@Body() { question }: QuestionDTO) {
    return {
      question: question,
      answer: {
        selectedOption: 'b',
      },
    };
  }
}
