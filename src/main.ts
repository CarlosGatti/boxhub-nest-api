import * as dotenv from 'dotenv';

import { AppModule } from './app/app.module';
import { NestFactory } from '@nestjs/core';

dotenv.config(); // carrega o .env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    process.env.FRONTEND_URL_LOCAL,
    process.env.FRONTEND_URL_PROD,
    'http://localhost:3000',
    'https://www.defined.one', // manual também pode
  ];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  await app.listen(3000);
}

bootstrap();
