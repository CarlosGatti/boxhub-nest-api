import { Module } from '@nestjs/common';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { AuthModule } from '../../../core/auth/auth.module';
import { BucketShareService } from './bucket-share.service';
import { BucketShareResolver } from './bucket-share.resolver';

@Module({
  imports: [AuthModule],
  providers: [BucketShareService, BucketShareResolver, PrismaService],
  exports: [BucketShareService],
})
export class BucketShareModule {}
