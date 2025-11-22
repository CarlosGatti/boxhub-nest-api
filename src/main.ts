import * as dotenv from "dotenv";

import express, { NextFunction, Request, Response } from "express";

import { AppModule } from "./app/app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { join } from "path";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // O servidor está atrás do Nginx (proxy)
  app.set("trust proxy", 1);

  // Criar pasta de uploads se não existir
  const { existsSync, mkdirSync } = await import('fs');
  const uploadsDir = join(process.cwd(), 'uploads');
  const uploadDirs = [
    'discart-items',
    'project-documents',
    'project-permits',
    'avatars',
    'insurance',
    'construction-logs',
  ];

  if (!existsSync(uploadsDir)) {
    try {
      mkdirSync(uploadsDir, { recursive: true, mode: 0o755 });
      console.log('✅ Created uploads directory');
    } catch (error: any) {
      console.error('❌ Failed to create uploads directory:', error.message);
    }
  }

  // Criar subpastas
  for (const dir of uploadDirs) {
    const dirPath = join(uploadsDir, dir);
    if (!existsSync(dirPath)) {
      try {
        mkdirSync(dirPath, { recursive: true, mode: 0o755 });
        console.log(`✅ Created upload directory: ${dir}`);
      } catch (error: any) {
        console.error(`❌ Failed to create directory ${dir}:`, error.message);
      }
    }
  }

  /**
   * 🚨 IMPORTANTE
   * Todo o CORS agora é controlado exclusivamente pelo NGINX.
   * Portanto, não habilitamos QUALQUER CORS no backend.
   *
   * ❌ Nada de app.enableCors()
   * ❌ Nada de middlewares CORS manuais
   */

  // Body parser – exceto no /graphql
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path !== "/graphql") {
      express.json({ strict: false })(req, res, next);
    } else {
      next();
    }
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path !== "/graphql") {
      express.urlencoded({ extended: true })(req, res, next);
    } else {
      next();
    }
  });

  // CORS manual para todas as rotas (incluindo uploads)
  app.use((req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin;
    
    if (origin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
    }
    
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
    res.setHeader('Access-Control-Allow-Headers', 
      'Content-Type, Authorization, X-Requested-With, Accept, Origin, ' +
      'Access-Control-Request-Headers, Access-Control-Request-Method'
    );
    res.setHeader('Access-Control-Max-Age', '86400');
    
    // Responder imediatamente para OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    
    next();
  });

  // Log simples para debugging
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`📥 ${req.method} ${req.path}`);
    next();
  });

  // Servir arquivos da pasta /uploads
  app.useStaticAssets(join(process.cwd(), "uploads"), {
    prefix: "/uploads/",
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, "0.0.0.0");

  console.log(`🚀 API running on http://localhost:${port}`);
  console.log(`✔ Backend CORS disabled — NGINX is now the CORS gateway.`);
}

bootstrap();
