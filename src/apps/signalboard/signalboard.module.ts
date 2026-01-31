import { Module } from '@nestjs/common';
import { AuthModule } from '../../auth/auth.module';
import { PrismaService } from '../../prisma.service';
import { SignalboardResolver } from './signalboard.resolver';
import { SignalboardService } from './signalboard.service';

@Module({
  imports: [AuthModule],
  providers: [SignalboardService, SignalboardResolver, PrismaService],
  exports: [SignalboardService],
})
export class SignalboardModule {}
