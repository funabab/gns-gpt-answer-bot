import { Module, ValidationPipe } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { join } from 'node:path';
import { QuestionModule } from './question/question.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend-client', 'dist'),
      exclude: ['api/*'],
      serveStaticOptions: {
        fallthrough: false,
      },
    }),
    QuestionModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
