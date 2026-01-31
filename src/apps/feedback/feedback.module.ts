import { Module } from '@nestjs/common';
import { AuthModule } from '../../auth/auth.module';
import { PrismaService } from '../../prisma.service';
import { FeedbackResolver } from './feedback.resolver';
import { FeedbackService } from './feedback.service';
import { OptionalJwtAuthGuard } from './guards/optional-jwt-auth.guard';

@Module({
  imports: [AuthModule],
  providers: [FeedbackService, FeedbackResolver, PrismaService, OptionalJwtAuthGuard],
  exports: [FeedbackService],
})
export class FeedbackModule {}
