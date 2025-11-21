import * as dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";

import { AppModule } from "./app/app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { join } from "path";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurar trust proxy para reconhecer headers X-Forwarded-* de proxies/load balancers
  app.set('trust proxy', 1);

  // CORS DEVE SER O PRIMEIRO MIDDLEWARE - ANTES DE TUDO
  // Middleware CORS manual e completo (funciona melhor que enableCors para GraphQL)
  app.use((req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin;
    
    // Permitir qualquer origem
    if (origin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
    }
    
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
    res.setHeader('Access-Control-Allow-Headers', 
      'Content-Type, Authorization, X-Requested-With, Accept, Origin, ' +
      'Access-Control-Request-Headers, Access-Control-Request-Method, ' +
      'X-Forwarded-For, X-Real-IP, apollographql-client-name, apollographql-client-version'
    );
    res.setHeader('Access-Control-Expose-Headers', 'Authorization');
    res.setHeader('Access-Control-Max-Age', '86400');
    
    // Responder imediatamente para OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    
    next();
  });

  // Também habilitar CORS do NestJS (backup)
  app.enableCors({
    origin: true,
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
    maxAge: 86400,
  });

  // Configurar body parser para aceitar body vazio
  // Excluir /graphql porque Apollo Server tem seu próprio body parser
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path === '/graphql') {
      return next();
    }
    express.json({ strict: false })(req, res, next);
  });
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path === '/graphql') {
      return next();
    }
    express.urlencoded({ extended: true })(req, res, next);
  });

  // Middleware para logar informações de requisições (debug)
  app.use((req: Request, res: Response, next: NextFunction) => {
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

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`🔒 CORS enabled: ALLOWING ALL ORIGINS (debug mode)`);
}

bootstrap();
