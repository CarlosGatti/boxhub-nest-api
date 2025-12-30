import { AuthModule } from '../auth/auth.module';
import { MockPriceProvider } from './providers/mock.provider';
import { Module } from '@nestjs/common';
import { PricingController } from './pricing.controller';
import { PricingService } from './pricing.service';
import { PrismaService } from '../prisma.service';
import { YahooPriceProvider } from './providers/yahoo.provider';

@Module({
  imports: [AuthModule],
  controllers: [PricingController],
  providers: [
    PricingService,
    PrismaService,
    MockPriceProvider,
    YahooPriceProvider,
  ],
  exports: [PricingService],
})
export class PricingModule {}
