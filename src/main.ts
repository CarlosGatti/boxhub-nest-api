import * as dotenv from "dotenv";

import express, { NextFunction, Request, Response } from "express";

import { AppModule } from "./app/app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { join } from "path";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

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
   * 🚨 REMOVE ANY CORS HEADERS that Express or Apollo try to add.
   * This ensures NGINX is the ONLY source of CORS.
   */
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.removeHeader("Access-Control-Allow-Origin");
    res.removeHeader("Access-Control-Allow-Credentials");
    res.removeHeader("Access-Control-Allow-Headers");
    res.removeHeader("Access-Control-Allow-Methods");
    res.removeHeader("Access-Control-Max-Age");
    next();
  });

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
