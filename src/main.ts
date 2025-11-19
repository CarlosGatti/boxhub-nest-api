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
  ].filter(Boolean); // Remove valores undefined/null do env

  // Log das origens permitidas ao iniciar
  console.log('🔒 CORS allowed origins:', allowedOrigins.join(', '));

  app.enableCors({
    origin: (origin, callback) => {
      // Permitir requisições sem origin (mobile apps, Postman, etc)
      if (!origin) {
        console.log('✅ CORS: Request without origin allowed');
        return callback(null, true);
      }
      
      // Normalizar origin (remover trailing slash e converter para lowercase)
      const normalizedOrigin = origin.replace(/\/$/, '').toLowerCase();
      
      // Função para extrair domínio base (sem protocolo e sem www)
      const getBaseDomain = (url: string): string | null => {
        const match = url.match(/^https?:\/\/(www\.)?(.+)$/);
        return match ? match[2].toLowerCase() : null;
      };
      
      // Verificar se a origem está na lista de permitidas (comparação exata)
      const exactMatch = allowedOrigins.some(allowed => {
        if (!allowed) return false;
        const normalizedAllowed = allowed.toLowerCase().replace(/\/$/, '');
        return normalizedOrigin === normalizedAllowed;
      });
      
      if (exactMatch) {
        console.log(`✅ CORS: Origin allowed (exact match): ${origin}`);
        return callback(null, true);
      }
      
      // Verificar por domínio base (ignorando www e protocolo)
      const requestDomain = getBaseDomain(normalizedOrigin);
      if (requestDomain) {
        const domainMatch = allowedOrigins.some(allowed => {
          if (!allowed) return false;
          const allowedDomain = getBaseDomain(allowed.toLowerCase());
          return allowedDomain === requestDomain;
        });
        
        if (domainMatch) {
          console.log(`✅ CORS: Origin allowed (domain match): ${origin} (domain: ${requestDomain})`);
          return callback(null, true);
        }
      }
      
      // Log para debug
      console.log(`❌ CORS blocked origin: ${origin}`);
      console.log(`📋 Allowed origins: ${allowedOrigins.join(', ')}`);
      
      callback(new Error(`Not allowed by CORS: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"],
    exposedHeaders: ["Authorization"],
    optionsSuccessStatus: 200,
    maxAge: 86400, // 24 horas
  });

  await app.listen(3000);
}

bootstrap();
