import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsResolver } from './ratings.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  providers: [RatingsService, RatingsResolver, PrismaService],
  exports: [RatingsService],
})
export class RatingsModule {}

