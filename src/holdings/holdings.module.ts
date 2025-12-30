import { AuthModule } from '../auth/auth.module';
import { HoldingsService } from './holdings.service';
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [HoldingsService, PrismaService],
  exports: [HoldingsService],
})
export class HoldingsModule {}
