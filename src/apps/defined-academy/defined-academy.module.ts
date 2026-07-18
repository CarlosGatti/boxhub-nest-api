import { Module } from '@nestjs/common';
import { AuthModule } from '../../core/auth/auth.module';
import { PrismaService } from '../../core/prisma/prisma.service';
import { DefinedAcademyAnalyticsService } from './defined-academy-analytics.service';
import { DefinedAcademyLearnerResolver } from './defined-academy-learner.resolver';
import { DefinedAcademyLearnerService } from './defined-academy-learner.service';
import { DefinedAcademyPublicResolver } from './defined-academy-public.resolver';
import { DefinedAcademyReferralService } from './defined-academy-referral.service';
import { DefinedAcademyShortLinkService } from './defined-academy-shortlink.service';
import { DefinedAcademyResolver } from './defined-academy.resolver';
import { DefinedAcademyService } from './defined-academy.service';

@Module({
  imports: [AuthModule],
  providers: [
    DefinedAcademyService,
    DefinedAcademyShortLinkService,
    DefinedAcademyReferralService,
    DefinedAcademyLearnerService,
    DefinedAcademyAnalyticsService,
    DefinedAcademyResolver,
    DefinedAcademyPublicResolver,
    DefinedAcademyLearnerResolver,
    PrismaService,
  ],
  exports: [
    DefinedAcademyService,
    DefinedAcademyShortLinkService,
    DefinedAcademyReferralService,
    DefinedAcademyLearnerService,
    DefinedAcademyAnalyticsService,
  ],
})
export class DefinedAcademyModule {}
