import { Module } from '@nestjs/common';
import { MailModule } from '../../core/services/providers/mail/mail.module';
import { PrismaService } from '../../core/prisma/prisma.service';
import { DEFINED_LEAD_CRM_SYNC } from './crm/defined-lead-crm-sync.token';
import { NoopDefinedLeadCrmSyncService } from './crm/noop-defined-lead-crm-sync.service';
import { DefinedLeadsResolver } from './defined-leads.resolver';
import { DefinedLeadsService } from './defined-leads.service';

@Module({
  imports: [MailModule],
  providers: [
    PrismaService,
    DefinedLeadsService,
    DefinedLeadsResolver,
    { provide: DEFINED_LEAD_CRM_SYNC, useClass: NoopDefinedLeadCrmSyncService },
  ],
})
export class DefinedLeadsModule {}
