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
  ].filter(Boolean) as string[];

  console.log('🔒 CORS allowed origins:', allowedOrigins.join(', '));

  // Configuração de CORS mais robusta
  app.enableCors({
    origin: function (origin, callback) {
      // Permitir requisições sem origin (Postman, mobile apps, etc)
      if (!origin) {
        console.log('✅ CORS: Request without origin allowed');
        return callback(null, true);
      }
      
      // Normalizar origin (remover trailing slash)
      const normalizedOrigin = origin.replace(/\/$/, '');
      
      // Verificar se está na lista de permitidos (comparação exata)
      if (allowedOrigins.includes(origin) || allowedOrigins.includes(normalizedOrigin)) {
        console.log(`✅ CORS: Origin allowed: ${origin}`);
        return callback(null, true);
      }
      
      // Verificar variações (com/sem www, http/https)
      const originLower = origin.toLowerCase().replace(/\/$/, '');
      const matches = allowedOrigins.some(allowed => {
        const allowedLower = allowed.toLowerCase().replace(/\/$/, '');
        // Extrair domínio base (sem protocolo e www)
        const originDomain = originLower.replace(/^https?:\/\/(www\.)?/, '');
        const allowedDomain = allowedLower.replace(/^https?:\/\/(www\.)?/, '');
        return originDomain === allowedDomain;
      });
      
      if (matches) {
        console.log(`✅ CORS: Origin allowed (domain match): ${origin}`);
        return callback(null, true);
      }
      
      console.log(`❌ CORS: Origin blocked: ${origin}`);
      console.log(`📋 Allowed: ${allowedOrigins.join(', ')}`);
      callback(new Error(`CORS: Origin ${origin} not allowed`));
    },
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
