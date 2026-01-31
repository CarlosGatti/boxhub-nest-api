import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    const rawUrl = process.env.DATABASE_URL;
    if (rawUrl) {
      try {
        const url = new URL(rawUrl);
        const dbName = url.pathname.replace('/', '');
        console.log(`🗄️  [prisma] db=${url.hostname}:${url.port || '5432'}/${dbName}`);
      } catch {
        console.log('⚠️  [prisma] Failed to parse DATABASE_URL');
      }
    } else {
      console.log('⚠️  [prisma] DATABASE_URL not set');
    }
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', (code) => {
      console.log(`About to exit with code: ${code}`);
    });
  }
}
