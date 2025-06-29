import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import Resolver from '@nestjs/graphql';
import { SubcontractorResolver } from './subcontractor.resolver';
import { SubcontractorService } from './subcontractor.service';

@Module({
  providers: [SubcontractorService, SubcontractorResolver, PrismaService],
})
export class SubcontractorModule {}
