import { DefinedProposalStatus } from '@prisma/client';
import { isProposalEditable } from './proposal-status-policy';

describe('isProposalEditable', () => {
  it('returns true for DRAFT', () => {
    expect(isProposalEditable(DefinedProposalStatus.DRAFT)).toBe(true);
  });

  it('returns true for SENT', () => {
    expect(isProposalEditable(DefinedProposalStatus.SENT)).toBe(true);
  });

  it('returns true for VIEWED', () => {
    expect(isProposalEditable(DefinedProposalStatus.VIEWED)).toBe(true);
  });

  it('returns true for APPROVED', () => {
    expect(isProposalEditable(DefinedProposalStatus.APPROVED)).toBe(true);
  });

  it('returns true for DECLINED', () => {
    expect(isProposalEditable(DefinedProposalStatus.DECLINED)).toBe(true);
  });

  it('returns false for ARCHIVED', () => {
    expect(isProposalEditable(DefinedProposalStatus.ARCHIVED)).toBe(false);
  });
});
