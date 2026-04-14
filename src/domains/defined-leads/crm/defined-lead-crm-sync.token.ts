export const DEFINED_LEAD_CRM_SYNC = Symbol('DEFINED_LEAD_CRM_SYNC');

/** Hook for future HubSpot (or other CRM) sync; default implementation is a no-op. */
export interface DefinedLeadCrmSync {
  onLeadPersisted(leadId: number): Promise<void>;
}
