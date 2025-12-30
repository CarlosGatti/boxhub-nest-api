import { AuthModule } from '../auth/auth.module';
import { Module } from '@nestjs/common';
import { PortfoliosController } from './portfolios.controller';
import { PortfoliosService } from './portfolios.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [PortfoliosController],
  providers: [PortfoliosService, PrismaService],
  exports: [PortfoliosService],
})
export class PortfoliosModule {}
