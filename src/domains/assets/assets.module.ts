import { AssetsService } from './assets.service';
import { AssetsResolver } from './assets.resolver';
import { AuthModule } from 'src/core/auth/auth.module';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [AssetsService, AssetsResolver, PrismaService],
  exports: [AssetsService],
})
export class AssetsModule {}
