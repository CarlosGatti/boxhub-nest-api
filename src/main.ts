import * as dotenv from "dotenv";

import express, { NextFunction, Request, Response } from "express";

import { AppModule } from "./app/app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { join } from "path";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Global validation pipe for DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  // Server behind Nginx
  app.set("trust proxy", 1);

  // 🟩 Create upload dirs
  const { existsSync, mkdirSync } = await import("fs");
  const uploadsDir = join(process.cwd(), "uploads");
  const uploadDirs = [
    "discart-items",
    "avatars",
  ];

  if (!existsSync(uploadsDir)) {
    mkdirSync(uploadsDir, { recursive: true, mode: 0o755 });
  }

  for (const dir of uploadDirs) {
    const dirPath = join(uploadsDir, dir);
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true, mode: 0o755 });
    }
  }

  /**
   * CORS Configuration
   * - Em produção: NGINX cuida do CORS (remove headers do backend)
   * - Em desenvolvimento: Backend precisa responder OPTIONS e adicionar headers CORS
   * 
   * SEGURANÇA: Por padrão, CORS é DESABILITADO. Só habilita se:
   * 1. NODE_ENV NÃO for 'production' (desenvolvimento local)
   * 2. OU ENABLE_LOCAL_CORS='true' (explicitamente habilitado)
   */
  const isProduction = process.env.NODE_ENV === 'production';
  const enableLocalCors = process.env.ENABLE_LOCAL_CORS === 'true';
  const shouldEnableCors = !isProduction || enableLocalCors;
  
  if (shouldEnableCors) {
    // 🟢 Desenvolvimento: Habilitar CORS para funcionar localmente
    console.log('🟢 CORS habilitado para desenvolvimento local');
    app.enableCors({
      origin: true, // Permite qualquer origem em desenvolvimento
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    });
    
    // Responder OPTIONS requests (preflight)
    app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Max-Age', '86400');
        return res.sendStatus(200);
      }
      next();
    });
  } else {
    // 🚨 PRODUÇÃO: REMOVE ANY CORS HEADERS that Express or Apollo try to add.
    // This ensures NGINX is the ONLY source of CORS in production.
    console.log('🚨 CORS desabilitado - NGINX cuida do CORS em produção');
    app.use((req: Request, res: Response, next: NextFunction) => {
      res.removeHeader("Access-Control-Allow-Origin");
      res.removeHeader("Access-Control-Allow-Credentials");
      res.removeHeader("Access-Control-Allow-Headers");
      res.removeHeader("Access-Control-Allow-Methods");
      res.removeHeader("Access-Control-Max-Age");
      next();
    });
  }

  // 🟩 Disable body parser for GraphQL upload
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path !== "/graphql" && !req.path.startsWith("/uploads")) {
      express.json({ strict: false })(req, res, next);
    } else {
      next();
    }
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path !== "/graphql" && !req.path.startsWith("/uploads")) {
      express.urlencoded({ extended: true })(req, res, next);
    } else {
      next();
    }
  });

  // Log
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`📥 ${req.method} ${req.path}`);
    next();
  });

  // Serve static uploads
  app.useStaticAssets(join(process.cwd(), "uploads"), {
    prefix: "/uploads/",
  });

  // Serve static email assets (logos, images, etc)
  app.useStaticAssets(join(process.cwd(), "src", "static", "email"), {
    prefix: "/static/email/",
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, "0.0.0.0");

  console.log(`🚀 API running on http://localhost:${port}`);
  console.log(`✔ All backend CORS removed — NGINX fully controls CORS`);
}

bootstrap();
