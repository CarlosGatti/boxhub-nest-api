import { AuthModule } from '../../core/auth/auth.module';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { BucketService } from './bucket.service';
import { BucketResolver } from './bucket.resolver';
import { BucketGoalsUploadController } from './upload/bucket-goals-upload.controller';
import { BucketGoalsUploadService } from './upload/bucket-goals-upload.service';
import { BucketShareModule } from './share/bucket-share.module';

@Module({
  imports: [AuthModule, BucketShareModule],
  controllers: [BucketGoalsUploadController],
  providers: [BucketService, BucketResolver, BucketGoalsUploadService, PrismaService],
  exports: [BucketService],
})
export class BucketModule {}
