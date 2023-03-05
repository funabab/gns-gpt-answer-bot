import { Module } from '@nestjs/common';
import { OpenaiModule } from 'src/openai/openai.module';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
  imports: [OpenaiModule],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
