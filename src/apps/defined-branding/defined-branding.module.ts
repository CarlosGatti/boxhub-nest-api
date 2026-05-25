import { Module } from '@nestjs/common';
import { AuthModule } from '../../core/auth/auth.module';
import { PrismaService } from '../../core/prisma/prisma.service';
import { DefinedBrandingPublicResolver } from './defined-branding-public.resolver';
import { DefinedBrandingResolver } from './defined-branding.resolver';
import { DefinedBrandingService } from './defined-branding.service';

@Module({
  imports: [AuthModule],
  providers: [
    DefinedBrandingService,
    DefinedBrandingResolver,
    DefinedBrandingPublicResolver,
    PrismaService,
  ],
  exports: [DefinedBrandingService],
})
export class DefinedBrandingModule {}
