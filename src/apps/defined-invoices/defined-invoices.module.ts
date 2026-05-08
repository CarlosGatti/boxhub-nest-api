import { Module } from '@nestjs/common';
import { AuthModule } from '../../core/auth/auth.module';
import { PrismaService } from '../../core/prisma/prisma.service';
import { MailModule } from '../../core/services/providers/mail/mail.module';
import { DefinedInvoicesPublicResolver } from './defined-invoices-public.resolver';
import { DefinedInvoicesResolver } from './defined-invoices.resolver';
import { DefinedInvoicesService } from './defined-invoices.service';

@Module({
  imports: [AuthModule, MailModule],
  providers: [
    DefinedInvoicesService,
    DefinedInvoicesResolver,
    DefinedInvoicesPublicResolver,
    PrismaService,
  ],
  exports: [DefinedInvoicesService],
})
export class DefinedInvoicesModule {}
