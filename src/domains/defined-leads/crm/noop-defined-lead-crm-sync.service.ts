import { Injectable, Logger } from '@nestjs/common';
import { DefinedLeadCrmSync } from './defined-lead-crm-sync.token';

@Injectable()
export class NoopDefinedLeadCrmSyncService implements DefinedLeadCrmSync {
  private readonly log = new Logger(NoopDefinedLeadCrmSyncService.name);

  async onLeadPersisted(leadId: number): Promise<void> {
    this.log.debug(`CRM sync noop (leadId=${leadId})`);
  }
}
