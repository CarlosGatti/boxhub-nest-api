import { Module } from '@nestjs/common';
import { AuthModule } from '../../core/auth/auth.module';
import { PrismaService } from '../../core/prisma/prisma.service';
import { DefinedProposalsResolver } from './defined-proposals.resolver';
import { DefinedProposalsService } from './defined-proposals.service';

@Module({
  imports: [AuthModule],
  providers: [DefinedProposalsService, DefinedProposalsResolver, PrismaService],
  exports: [DefinedProposalsService],
})
export class DefinedProposalsModule {}
