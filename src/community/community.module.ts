import { Module } from '@nestjs/common';
import { CommunityResolver } from './community.resolver';
import { CommunityService } from './community.service';
import { PrismaService } from '../prisma.service';
import { GroupModule } from './group/group.module';

@Module({
  imports: [GroupModule],
  providers: [PrismaService, CommunityService, CommunityResolver],
  exports: [GroupModule],
})
export class CommunityModule {}
