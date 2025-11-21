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
  app.set('trust proxy', 1);

  /**
   * 🚨 REMOVE COMPLETAMENTE QUALQUER CORS DO BACKEND
   * Agora o NGINX controla todo o CORS.
   */
  // ❌ Removido: middleware CORS manual
  // ❌ Removido: app.enableCors()

  // Body parser – manter
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

  // Log básico — manter como está
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`📥 ${req.method} ${req.path}`);
    next();
  });

  // Static /uploads
  app.useStaticAssets(join(process.cwd(), "uploads"), {
    prefix: "/uploads/",
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, "0.0.0.0");

  console.log(`🚀 API running on http://localhost:${port}`);
  console.log(`✔ Backend CORS disabled — NGINX is now the CORS gateway.`);
}

bootstrap();
