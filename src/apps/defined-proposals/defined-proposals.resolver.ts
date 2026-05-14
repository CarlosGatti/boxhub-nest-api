import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DefinedProposal } from '@generated/defined-proposal/defined-proposal.model';
import { DefinedProposalStatus } from '@generated/prisma/defined-proposal-status.enum';
import { User } from '@generated/user/user.model';
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard';
import {
  AppPermissionGuard,
  RequireApp,
} from '../../core/auth/guards/app-permission.guard';
import { CurrentUser } from '../../domains/user/current-user.decorator';
import { CreateDefinedProposalInput } from './dto/create-defined-proposal.input';
import { UpdateDefinedProposalInput } from './dto/update-defined-proposal.input';
import { DefinedProposalsService } from './defined-proposals.service';
import { DefinedProposalValidationResult } from './types/defined-proposal-validation-result.type';

@Resolver(() => DefinedProposal)
@UseGuards(JwtAuthGuard, AppPermissionGuard)
export class DefinedProposalsResolver {
  constructor(
    private readonly definedProposalsService: DefinedProposalsService,
  ) {}

  @RequireApp('DEFINED')
  @Query(() => [DefinedProposal], { name: 'definedProposals' })
  async definedProposals(
    @Args('clientId', { type: () => Int, nullable: true }) clientId?: number,
    @Args('projectId', { type: () => Int, nullable: true }) projectId?: number,
    @Args('status', { type: () => DefinedProposalStatus, nullable: true })
    status?: DefinedProposalStatus,
  ) {
    return this.definedProposalsService.listProposals(clientId, projectId, status);
  }

  @RequireApp('DEFINED')
  @Query(() => DefinedProposal, { name: 'definedProposal', nullable: true })
  async definedProposal(@Args('id', { type: () => Int }) id: number) {
    return this.definedProposalsService.getProposal(id);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedProposal], { name: 'definedClientProposals' })
  async definedClientProposals(
    @Args('clientId', { type: () => Int }) clientId: number,
  ) {
    return this.definedProposalsService.getClientProposals(clientId);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedProposal], { name: 'definedProjectProposals' })
  async definedProjectProposals(
    @Args('projectId', { type: () => Int }) projectId: number,
  ) {
    return this.definedProposalsService.getProjectProposals(projectId);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedProposal, { name: 'createDefinedProposal' })
  async createDefinedProposal(
    @Args('input') input: CreateDefinedProposalInput,
    @CurrentUser() user: User,
  ) {
    return this.definedProposalsService.createProposal(input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedProposal, { name: 'updateDefinedProposal' })
  async updateDefinedProposal(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateDefinedProposalInput,
    @CurrentUser() user: User,
  ) {
    return this.definedProposalsService.updateProposal(id, input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => Boolean, { name: 'deleteDefinedProposal' })
  async deleteDefinedProposal(@Args('id', { type: () => Int }) id: number) {
    return this.definedProposalsService.deleteProposal(id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedProposalValidationResult, {
    name: 'validateDefinedProposal',
  })
  async validateDefinedProposal(@Args('id', { type: () => Int }) id: number) {
    return this.definedProposalsService.validateProposal(id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedProposal, { name: 'publishDefinedProposal' })
  async publishDefinedProposal(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.definedProposalsService.publishProposal(id, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedProposal, {
    name: 'regenerateDefinedProposalShareToken',
  })
  async regenerateDefinedProposalShareToken(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.definedProposalsService.regenerateProposalShareToken(id, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedProposal, { name: 'archiveDefinedProposal' })
  async archiveDefinedProposal(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.definedProposalsService.archiveProposal(id, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedProposal, { name: 'duplicateDefinedProposal' })
  async duplicateDefinedProposal(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.definedProposalsService.duplicateProposal(id, user.id);
  }
}
