import { AuthModule } from 'src/core/auth/auth.module';
import { MockPriceProvider } from './providers/mock.provider';
import { Module } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { PricingResolver } from './pricing.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';
import { YahooPriceProvider } from './providers/yahoo.provider';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [
    PricingService,
    PricingResolver,
    PrismaService,
    MockPriceProvider,
    YahooPriceProvider,
  ],
  exports: [PricingService],
})
export class PricingModule {}
