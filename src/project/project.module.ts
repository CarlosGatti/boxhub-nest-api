// src/project/project.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ProjectResolver } from './project.resolver';
import { ProjectService } from './project.service';

@Module({
  providers: [ProjectService, ProjectResolver, PrismaService],
  
})
export class ProjectModule {}
