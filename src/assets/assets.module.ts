import { AssetsService } from './assets.service';
import { AssetsResolver } from './assets.resolver';
import { AuthModule } from '../auth/auth.module';
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [AssetsService, AssetsResolver, PrismaService],
  exports: [AssetsService],
})
export class AssetsModule {}
