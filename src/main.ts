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

  const allowedOrigins = [
    process.env.FRONTEND_URL_LOCAL,
    process.env.FRONTEND_URL_PROD,
    "http://localhost:3000",
    "http://localhost:3001",
    "https://www.defined.one",
    "https://carlosgatti.com",
    "https://www.carlosgatti.com",
    "http://carlosgatti.com",
    "http://www.carlosgatti.com",
    "https://discart.me",
    "https://www.discart.me",
    "http://discart.me",
    "http://www.discart.me",
  ].filter(Boolean) as string[]; // Remove valores undefined/null do env e tipa como string[]

  // Log das origens permitidas ao iniciar
  console.log('🔒 CORS allowed origins:', allowedOrigins.join(', '));

  app.enableCors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"],
    exposedHeaders: ["Authorization"],
    credentials: true,
    optionsSuccessStatus: 200,
    maxAge: 86400, // 24 horas
  });

  await app.listen(3000);
}

bootstrap();
