import { AuthModule } from '../../core/auth/auth.module';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from '../../core/prisma/prisma.service';
import { SignalboardResolver } from './signalboard.resolver';
import { SignalboardIngestionService } from './ingestion/signalboard-ingestion.service';
import { SignalboardService } from './signalboard.service';

@Module({
  imports: [AuthModule, HttpModule],
  providers: [SignalboardService, SignalboardResolver, PrismaService, SignalboardIngestionService],
  exports: [SignalboardService],
})
export class SignalboardModule {}
