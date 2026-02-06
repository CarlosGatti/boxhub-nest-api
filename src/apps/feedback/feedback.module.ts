import { Module } from '@nestjs/common';
import { AuthModule } from '../../core/auth/auth.module';
import { PrismaService } from '../../core/prisma/prisma.service';
import { FeedbackResolver } from './feedback.resolver';
import { FeedbackService } from './feedback.service';
import { OptionalJwtAuthGuard } from './guards/optional-jwt-auth.guard';

@Module({
  imports: [AuthModule],
  providers: [FeedbackService, FeedbackResolver, PrismaService, OptionalJwtAuthGuard],
  exports: [FeedbackService],
})
export class FeedbackModule {}
