import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DefinedProposal } from '@generated/defined-proposal/defined-proposal.model';
import { DefinedProposalsService } from './defined-proposals.service';
import { DefinedProposalRecipientView } from './types/defined-proposal-recipient-view.type';

@Resolver()
export class DefinedProposalsPublicResolver {
  constructor(
    private readonly definedProposalsService: DefinedProposalsService,
  ) {}

  @Query(() => DefinedProposalRecipientView, {
    name: 'definedProposalForRecipient',
  })
  async definedProposalForRecipient(@Args('token') token: string) {
    return this.definedProposalsService.getProposalForRecipient(token);
  }

  @Mutation(() => DefinedProposal, { name: 'approveDefinedProposalByToken' })
  async approveDefinedProposalByToken(@Args('token') token: string) {
    return this.definedProposalsService.approveProposalByToken(token);
  }

  @Mutation(() => DefinedProposal, { name: 'declineDefinedProposalByToken' })
  async declineDefinedProposalByToken(
    @Args('token') token: string,
    @Args('reason', { nullable: true }) reason?: string,
  ) {
    return this.definedProposalsService.declineProposalByToken(token, reason);
  }
}
