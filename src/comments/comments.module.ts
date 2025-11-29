import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [CommentsService, CommentsResolver, PrismaService],
  exports: [CommentsService],
})
export class CommentsModule {}

