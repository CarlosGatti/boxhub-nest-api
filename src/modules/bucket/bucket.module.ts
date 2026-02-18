import { AuthModule } from '../../core/auth/auth.module';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { BucketService } from './bucket.service';
import { BucketResolver } from './bucket.resolver';

@Module({
  imports: [AuthModule],
  providers: [BucketService, BucketResolver, PrismaService],
  exports: [BucketService],
})
export class BucketModule {}
