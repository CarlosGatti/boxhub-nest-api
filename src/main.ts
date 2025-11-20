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

  // Configuração CORS - PERMITIR TUDO TEMPORARIAMENTE PARA DEBUG
  app.enableCors({
    origin: true, // Permitir todas as origens
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
      "apollographql-client-name",
      "apollographql-client-version",
    ],
    exposedHeaders: ["Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: false,
    maxAge: 86400, // 24 horas
  });

  // Middleware adicional para garantir CORS em todas as respostas
  app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    const origin = req.headers.origin;
    if (origin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
    }
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin, apollographql-client-name, apollographql-client-version');
    
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`🔒 CORS enabled for origins: ${allowedOrigins.join(', ')}`);
}

bootstrap();
