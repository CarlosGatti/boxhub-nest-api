import * as dotenv from "dotenv";
import * as express from "express";

import { AppModule } from "./app/app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { join } from "path";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurar trust proxy para reconhecer headers X-Forwarded-* de proxies/load balancers
  // Útil mesmo sem Cloudflare (para nginx, outros proxies, etc)
  app.set('trust proxy', 1);

  // Configurar body parser para aceitar body vazio
  app.use(express.json({ strict: false }));
  app.use(express.urlencoded({ extended: true }));

  // Middleware para logar informações de requisições (debug)
  app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    const origin = req.headers.origin || req.headers.referer;
    const xForwardedFor = req.headers['x-forwarded-for'];
    const realIp = req.headers['x-real-ip'] || req.ip;
    const host = req.headers.host;
    
    // Log todas as requisições para debug
    console.log(`📥 ${req.method} ${req.path}`, {
      origin,
      host,
      'real-ip': realIp,
      'x-forwarded-for': xForwardedFor,
      'user-agent': req.headers['user-agent']?.substring(0, 50),
    });
    
    next();
  });

  // Servir arquivos da pasta "uploads"
  app.useStaticAssets(join(process.cwd(), "uploads"), {
    prefix: "/uploads/",
  });

  // Configurar CORS - lista de origens permitidas
  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://carlosgatti.com",
    "https://www.carlosgatti.com",
    "https://discart.me",
    "https://www.discart.me",
    // Adicionar variáveis de ambiente se existirem
    process.env.FRONTEND_URL,
    process.env.FRONTEND_URL_LOCAL,
    process.env.FRONTEND_URL_PROD,
  ].filter(Boolean) as string[];

  console.log('🔒 CORS allowed origins:', allowedOrigins.join(', '));

  // Configuração robusta de CORS
  app.enableCors({
    origin: (origin, callback) => {
      // Permitir requisições sem origin (mobile apps, Postman, etc.)
      if (!origin) {
        console.log('✅ CORS: Allowing request without origin');
        return callback(null, true);
      }
      
      // Verificar se a origin está na lista permitida
      if (allowedOrigins.includes(origin)) {
        console.log('✅ CORS: Allowing origin:', origin);
        return callback(null, true);
      }
      
      // Log para debug - mostrar todas as informações
      console.log('⚠️  CORS blocked origin:', origin);
      console.log('   Allowed origins:', allowedOrigins.join(', '));
      
      // TEMPORARIAMENTE: Permitir todas as origens para debug
      // TODO: Remover isso e usar apenas origens permitidas em produção
      console.log('⚠️  TEMP: Allowing all origins for debugging');
      return callback(null, true);
      
      // Por segurança, apenas permitir origens conhecidas (comentado temporariamente)
      // callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
      "Origin",
      "Access-Control-Request-Headers",
      "Access-Control-Request-Method",
      "X-Forwarded-For",
      "X-Real-IP",
    ],
    exposedHeaders: ["Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: false,
    maxAge: 86400, // 24 horas
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`🔒 CORS enabled for origins: ${allowedOrigins.join(', ')}`);
}

bootstrap();
