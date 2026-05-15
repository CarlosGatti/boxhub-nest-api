import { DefinedProposalStatus } from '@prisma/client';

const EDITABLE_PROPOSAL_STATUSES = new Set<DefinedProposalStatus>([
  DefinedProposalStatus.DRAFT,
  DefinedProposalStatus.SENT,
  DefinedProposalStatus.VIEWED,
  DefinedProposalStatus.APPROVED,
  DefinedProposalStatus.DECLINED,
]);

export function isProposalEditable(status: DefinedProposalStatus): boolean {
  return EDITABLE_PROPOSAL_STATUSES.has(status);
}
