import { AppModule } from './app/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://www.k-hub.us','http://localhost:3001', 'http://192.168.0.4:3001'], // especifique os domínios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // especifique os métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // especifique os cabeçalhos permitidos
    credentials: true, // permitir credenciais do cliente (por exemplo, cookies)
  });
  await app.listen(3000);
}
bootstrap();
