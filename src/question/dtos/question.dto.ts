import { IsNotEmpty, IsString } from 'class-validator';

export class QuestionDTO {
  @IsString()
  @IsNotEmpty()
  question: string;
}
