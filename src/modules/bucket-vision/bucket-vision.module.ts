import { AuthModule } from '../../core/auth/auth.module';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { BucketVisionService } from './bucket-vision.service';
import { BucketVisionResolver } from './bucket-vision.resolver';

@Module({
  imports: [AuthModule],
  providers: [BucketVisionService, BucketVisionResolver, PrismaService],
  exports: [BucketVisionService],
})
export class BucketVisionModule {}
