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
import { DefinedAcademyUploadController } from './upload/defined-academy-upload.controller';
import { DefinedAcademyUploadService } from './upload/defined-academy-upload.service';
import { DefinedAcademyCareerService } from './defined-academy-career.service';
import { DefinedAcademyCareerPublicResolver } from './defined-academy-career-public.resolver';
import { DefinedAcademyCareerLearnerResolver } from './defined-academy-career-learner.resolver';
import { DefinedAcademyCareerResolver } from './defined-academy-career.resolver';

@Module({
  imports: [AuthModule],
  controllers: [DefinedAcademyUploadController],
  providers: [
    DefinedAcademyService,
    DefinedAcademyUploadService,
    DefinedAcademyShortLinkService,
    DefinedAcademyReferralService,
    DefinedAcademyLearnerService,
    DefinedAcademyAnalyticsService,
    DefinedAcademyCareerService,
    DefinedAcademyResolver,
    DefinedAcademyPublicResolver,
    DefinedAcademyLearnerResolver,
    DefinedAcademyCareerPublicResolver,
    DefinedAcademyCareerLearnerResolver,
    DefinedAcademyCareerResolver,
    PrismaService,
  ],
  exports: [
    DefinedAcademyService,
    DefinedAcademyShortLinkService,
    DefinedAcademyReferralService,
    DefinedAcademyLearnerService,
    DefinedAcademyAnalyticsService,
    DefinedAcademyCareerService,
  ],
})
export class DefinedAcademyModule {}
