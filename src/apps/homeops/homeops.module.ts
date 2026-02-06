import { Module } from '@nestjs/common';
import { AuthModule } from '../../core/auth/auth.module';
import { PrismaService } from '../../core/prisma/prisma.service';
import { HomeOpsResolver } from './homeops.resolver';
import { HomeOpsService } from './homeops.service';

@Module({
  imports: [AuthModule],
  providers: [HomeOpsService, HomeOpsResolver, PrismaService],
  exports: [HomeOpsService],
})
export class HomeOpsModule {}
