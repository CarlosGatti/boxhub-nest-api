import { Module } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { AdminGuard } from 'src/core/auth/guards/admin.guard';
import { BusinessesController } from './businesses/businesses.controller';
import { BusinessesService } from './businesses/businesses.service';
import { TemplatesController } from './templates/templates.controller';
import { TemplatesService } from './templates/templates.service';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import { ExportsController } from './exports/exports.controller';
import { ExportsService } from './exports/exports.service';
import { RedirectsController } from './redirects/redirects.controller';
import { RedirectsService } from './redirects/redirects.service';
import { PremiumRequestsController } from './premium-requests/premium-requests.controller';
import { PremiumRequestsService } from './premium-requests/premium-requests.service';

@Module({
  controllers: [
    BusinessesController,
    TemplatesController,
    ProjectsController,
    ExportsController,
    RedirectsController,
    PremiumRequestsController,
  ],
  providers: [
    PrismaService,
    JwtAuthGuard,
    AdminGuard,
    BusinessesService,
    TemplatesService,
    ProjectsService,
    ExportsService,
    RedirectsService,
    PremiumRequestsService,
  ],
})
export class ReviewCardsModule {}
