import { AuthModule } from 'src/core/auth/auth.module';
import { MetricsService } from './metrics.service';
import { MetricsResolver } from './metrics.resolver';
import { Module } from '@nestjs/common';
import { PricingModule } from '../pricing/pricing.module';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  imports: [PricingModule, AuthModule],
  controllers: [],
  providers: [MetricsService, MetricsResolver, PrismaService],
  exports: [MetricsService],
})
export class MetricsModule {}
