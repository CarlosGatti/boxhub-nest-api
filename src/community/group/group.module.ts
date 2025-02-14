import { Module } from '@nestjs/common';
import { GroupResolver } from './group.resolver';
import { GroupService } from './group.service';
import { PrismaService } from '../../prisma.service';

@Module({
  providers: [PrismaService, GroupService, GroupResolver],
})
export class GroupModule {}
