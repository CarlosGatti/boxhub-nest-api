import { AuthModule } from 'src/core/auth/auth.module';
import { Module } from '@nestjs/common';
import { CashflowService } from './cashflow.service';
import { CashflowResolver } from './cashflow.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [CashflowService, CashflowResolver, PrismaService],
  exports: [CashflowService],
})
export class CashflowModule {}

