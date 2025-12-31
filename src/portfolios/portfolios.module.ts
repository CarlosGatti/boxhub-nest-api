import { AuthModule } from '../auth/auth.module';
import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosResolver } from './portfolios.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [PortfoliosService, PortfoliosResolver, PrismaService],
  exports: [PortfoliosService],
})
export class PortfoliosModule {}
