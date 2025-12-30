import { AuthModule } from '../auth/auth.module';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service';
import { Module } from '@nestjs/common';
import { PricingModule } from '../pricing/pricing.module';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [PricingModule, AuthModule],
  controllers: [MetricsController],
  providers: [MetricsService, PrismaService],
  exports: [MetricsService],
})
export class MetricsModule {}
