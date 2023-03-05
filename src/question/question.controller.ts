import { Body, Controller, Post } from '@nestjs/common';
import { QuestionDTO } from './dtos/question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  @Post('getAnswer')
  getQuestionAnswer(@Body() { question }: QuestionDTO) {
    return this.questionService.getAnswer(question);
  }
}
