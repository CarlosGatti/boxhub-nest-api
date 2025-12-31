import { AuthModule } from '../auth/auth.module';
import { HoldingsService } from './holdings.service';
import { HoldingsResolver } from './holdings.resolver';
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [HoldingsService, HoldingsResolver, PrismaService],
  exports: [HoldingsService],
})
export class HoldingsModule {}
