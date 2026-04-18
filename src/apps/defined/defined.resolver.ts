import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { DefinedClient } from '@generated/defined-client/defined-client.model';
import { DefinedProject } from '@generated/defined-project/defined-project.model';
import { DefinedInternalNote } from '@generated/defined-internal-note/defined-internal-note.model';
import { DefinedIntakeForm } from '@generated/defined-intake-form/defined-intake-form.model';
import { DefinedIntakeFormType } from '@generated/prisma/defined-intake-form-type.enum';
import { User } from '@generated/user/user.model';
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard';
import {
  AppPermissionGuard,
  RequireApp,
} from '../../core/auth/guards/app-permission.guard';
import { CurrentUser } from '../../domains/user/current-user.decorator';
import { GraphQLJSON } from 'graphql-type-json';
import { CreateDefinedClientInput } from './dto/create-defined-client.input';
import { UpdateDefinedClientInput } from './dto/update-defined-client.input';
import { CreateDefinedProjectInput } from './dto/create-defined-project.input';
import { UpdateDefinedProjectInput } from './dto/update-defined-project.input';
import { ChangeDefinedProjectStatusInput } from './dto/change-defined-project-status.input';
import { CreateDefinedInternalNoteInput } from './dto/create-defined-internal-note.input';
import { DefinedClientFilterInput } from './dto/defined-client-filter.input';
import { DefinedProjectFilterInput } from './dto/defined-project-filter.input';
import { CreateDefinedIntakeFormInput } from './dto/create-defined-intake-form.input';
import { SubmitDefinedIntakeFormInput } from './dto/submit-defined-intake-form.input';
import { MarkDefinedIntakeFormReviewedInput } from './dto/mark-defined-intake-form-reviewed.input';
import { DefinedIntakeShareLinkPayload } from './types/defined-intake-share-link-payload.type';
import { DefinedService } from './defined.service';

@Resolver()
@UseGuards(JwtAuthGuard, AppPermissionGuard)
export class DefinedResolver {
  constructor(private readonly definedService: DefinedService) {}

  @RequireApp('DEFINED')
  @Mutation(() => DefinedClient, { name: 'createDefinedClient' })
  async createDefinedClient(@Args('input') input: CreateDefinedClientInput) {
    return this.definedService.createClient(input);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedClient], { name: 'definedClients' })
  async definedClients(
    @Args('filter', { nullable: true }) filter?: DefinedClientFilterInput,
    @Args('take', { type: () => Int, nullable: true, defaultValue: 50 })
    take?: number,
    @Args('skip', { type: () => Int, nullable: true, defaultValue: 0 })
    skip?: number,
  ) {
    return this.definedService.listClients(filter, take ?? 50, skip ?? 0);
  }

  @RequireApp('DEFINED')
  @Query(() => DefinedClient, { name: 'definedClient' })
  async definedClient(@Args('id', { type: () => Int }) id: number) {
    return this.definedService.getClient(id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedClient, { name: 'updateDefinedClient' })
  async updateDefinedClient(@Args('input') input: UpdateDefinedClientInput) {
    return this.definedService.updateClient(input);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedProject, { name: 'createDefinedProject' })
  async createDefinedProject(@Args('input') input: CreateDefinedProjectInput) {
    return this.definedService.createProject(input);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedProject], { name: 'definedProjects' })
  async definedProjects(
    @Args('filter', { nullable: true }) filter?: DefinedProjectFilterInput,
    @Args('take', { type: () => Int, nullable: true, defaultValue: 50 })
    take?: number,
    @Args('skip', { type: () => Int, nullable: true, defaultValue: 0 })
    skip?: number,
  ) {
    return this.definedService.listProjects(filter, take ?? 50, skip ?? 0);
  }

  @RequireApp('DEFINED')
  @Query(() => DefinedProject, { name: 'definedProject' })
  async definedProject(@Args('id', { type: () => Int }) id: number) {
    return this.definedService.getProject(id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedProject, { name: 'updateDefinedProject' })
  async updateDefinedProject(@Args('input') input: UpdateDefinedProjectInput) {
    return this.definedService.updateProject(input);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedProject, { name: 'changeDefinedProjectStatus' })
  async changeDefinedProjectStatus(
    @Args('input') input: ChangeDefinedProjectStatusInput,
  ) {
    return this.definedService.changeProjectStatus(input);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedInternalNote, { name: 'createDefinedInternalNote' })
  async createDefinedInternalNote(
    @Args('input') input: CreateDefinedInternalNoteInput,
    @CurrentUser() user: User,
  ) {
    return this.definedService.createInternalNote(input, user.id);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedInternalNote], { name: 'definedInternalNotesByClient' })
  async definedInternalNotesByClient(
    @Args('clientId', { type: () => Int }) clientId: number,
  ) {
    return this.definedService.listInternalNotesByClient(clientId);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedInternalNote], { name: 'definedInternalNotesByProject' })
  async definedInternalNotesByProject(
    @Args('projectId', { type: () => Int }) projectId: number,
  ) {
    return this.definedService.listInternalNotesByProject(projectId);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedIntakeShareLinkPayload, {
    name: 'generateDefinedIntakeShareLink',
  })
  async generateDefinedIntakeShareLink(
    @Args('intakeFormId', { type: () => Int }) intakeFormId: number,
  ) {
    return this.definedService.generateIntakeShareLink(intakeFormId);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedIntakeForm, { name: 'createDefinedIntakeForm' })
  async createDefinedIntakeForm(
    @Args('input') input: CreateDefinedIntakeFormInput,
  ) {
    return this.definedService.createIntakeForm(input);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedIntakeForm], { name: 'definedIntakeFormsByClient' })
  async definedIntakeFormsByClient(
    @Args('clientId', { type: () => Int }) clientId: number,
  ) {
    return this.definedService.listIntakeFormsByClient(clientId);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedIntakeForm], { name: 'definedIntakeFormsByProject' })
  async definedIntakeFormsByProject(
    @Args('projectId', { type: () => Int }) projectId: number,
  ) {
    return this.definedService.listIntakeFormsByProject(projectId);
  }

  @RequireApp('DEFINED')
  @Query(() => DefinedIntakeForm, { name: 'definedIntakeForm' })
  async definedIntakeForm(@Args('id', { type: () => Int }) id: number) {
    return this.definedService.getIntakeForm(id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedIntakeForm, { name: 'submitDefinedIntakeForm' })
  async submitDefinedIntakeForm(
    @Args('input') input: SubmitDefinedIntakeFormInput,
  ) {
    return this.definedService.submitIntakeForm(input);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedIntakeForm, { name: 'markDefinedIntakeFormReviewed' })
  async markDefinedIntakeFormReviewed(
    @Args('input') input: MarkDefinedIntakeFormReviewedInput,
  ) {
    return this.definedService.markIntakeFormReviewed(input);
  }

  @RequireApp('DEFINED')
  @Query(() => GraphQLJSON, { name: 'definedIntakeTemplate' })
  async definedIntakeTemplate(
    @Args('formType', { type: () => DefinedIntakeFormType })
    formType: DefinedIntakeFormType,
  ) {
    return this.definedService.getIntakeTemplate(formType as any);
  }
}
