import * as dotenv from "dotenv";
import * as express from "express";

import { AppModule } from "./app/app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { join } from "path";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurar body parser para aceitar body vazio
  app.use(express.json({ strict: false }));
  app.use(express.urlencoded({ extended: true }));

  // Servir arquivos da pasta "uploads"

  app.useStaticAssets(join(process.cwd(), "uploads"), {
    prefix: "/uploads/",
  });

  // Configurar CORS ANTES de qualquer middleware
  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://carlosgatti.com",
    "https://www.carlosgatti.com",
    "https://discart.me",
    "https://www.discart.me",
  ].filter(Boolean) as string[];

  console.log('🔒 CORS allowed origins:', allowedOrigins.join(', '));

  // CORS: PERMITIR TUDO temporariamente para testar
  // Se funcionar, sabemos que é problema de CORS. Se não funcionar, é outra coisa.
  app.enableCors({
    origin: true, // PERMITIR TODAS AS ORIGENS
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin", "Access-Control-Request-Headers", "Access-Control-Request-Method"],
    exposedHeaders: ["Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: false,
    maxAge: 86400,
  });

  await app.listen(3000);
}

bootstrap();
