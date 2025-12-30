import { AssetsService } from './assets.service';
import { AuthModule } from '../auth/auth.module';
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [AssetsService, PrismaService],
  exports: [AssetsService],
})
export class AssetsModule {}
