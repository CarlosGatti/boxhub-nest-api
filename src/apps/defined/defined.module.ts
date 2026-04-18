import { Module } from '@nestjs/common';
import { AuthModule } from '../../core/auth/auth.module';
import { PrismaService } from '../../core/prisma/prisma.service';
import { DefinedPublicResolver } from './defined-public.resolver';
import { DefinedResolver } from './defined.resolver';
import { DefinedService } from './defined.service';

@Module({
  imports: [AuthModule],
  providers: [DefinedService, DefinedResolver, DefinedPublicResolver, PrismaService],
  exports: [DefinedService],
})
export class DefinedModule {}
