import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:5173'],
    },
  });
  app.setGlobalPrefix('api');
  await app.listen(PORT);
}
bootstrap();
