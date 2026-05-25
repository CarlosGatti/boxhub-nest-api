import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DefinedBrandingAsset } from '@generated/defined-branding-asset/defined-branding-asset.model';
import { DefinedBrandingProject } from '@generated/defined-branding-project/defined-branding-project.model';
import { DefinedBrandingSection } from '@generated/defined-branding-section/defined-branding-section.model';
import { DefinedBrandingProjectStatus } from '@generated/prisma/defined-branding-project-status.enum';
import { User } from '@generated/user/user.model';
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard';
import {
  AppPermissionGuard,
  RequireApp,
} from '../../core/auth/guards/app-permission.guard';
import { CurrentUser } from '../../domains/user/current-user.decorator';
import { CreateDefinedBrandingAssetInput } from './dto/create-defined-branding-asset.input';
import { CreateDefinedBrandingProjectInput } from './dto/create-defined-branding-project.input';
import { CreateDefinedBrandingSectionInput } from './dto/create-defined-branding-section.input';
import { ReorderDefinedBrandingSectionsInput } from './dto/reorder-defined-branding-sections.input';
import { UpdateDefinedBrandingAssetInput } from './dto/update-defined-branding-asset.input';
import { UpdateDefinedBrandingProjectInput } from './dto/update-defined-branding-project.input';
import { UpdateDefinedBrandingProjectVisibilityInput } from './dto/update-defined-branding-project-visibility.input';
import { UpdateDefinedBrandingSectionInput } from './dto/update-defined-branding-section.input';
import { DefinedBrandingService } from './defined-branding.service';

@Resolver(() => DefinedBrandingProject)
@UseGuards(JwtAuthGuard, AppPermissionGuard)
export class DefinedBrandingResolver {
  constructor(private readonly definedBrandingService: DefinedBrandingService) {}

  @RequireApp('DEFINED')
  @Query(() => [DefinedBrandingProject], { name: 'definedBrandingProjects' })
  async definedBrandingProjects(
    @Args('clientId', { type: () => Int, nullable: true }) clientId?: number,
    @Args('projectId', { type: () => Int, nullable: true }) projectId?: number,
    @Args('status', { type: () => DefinedBrandingProjectStatus, nullable: true })
    status?: DefinedBrandingProjectStatus,
  ) {
    return this.definedBrandingService.listBrandingProjects(
      clientId,
      projectId,
      status,
    );
  }

  @RequireApp('DEFINED')
  @Query(() => DefinedBrandingProject, {
    name: 'definedBrandingProject',
    nullable: true,
  })
  async definedBrandingProject(@Args('id', { type: () => Int }) id: number) {
    return this.definedBrandingService.getBrandingProject(id);
  }

  @RequireApp('DEFINED')
  @Query(() => DefinedBrandingProject, {
    name: 'definedBrandingProjectBySlug',
    nullable: true,
  })
  async definedBrandingProjectBySlug(@Args('slug') slug: string) {
    return this.definedBrandingService.getBrandingProjectBySlug(slug);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedBrandingProject], { name: 'definedBrandingProjectsByClient' })
  async definedBrandingProjectsByClient(
    @Args('clientId', { type: () => Int }) clientId: number,
  ) {
    return this.definedBrandingService.getBrandingProjectsByClient(clientId);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedBrandingProject], { name: 'definedBrandingProjectsByProject' })
  async definedBrandingProjectsByProject(
    @Args('projectId', { type: () => Int }) projectId: number,
  ) {
    return this.definedBrandingService.getBrandingProjectsByProject(projectId);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedBrandingProject, { name: 'createDefinedBrandingProject' })
  async createDefinedBrandingProject(
    @Args('input') input: CreateDefinedBrandingProjectInput,
    @CurrentUser() user: User,
  ) {
    return this.definedBrandingService.createBrandingProject(input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedBrandingProject, { name: 'updateDefinedBrandingProject' })
  async updateDefinedBrandingProject(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateDefinedBrandingProjectInput,
    @CurrentUser() user: User,
  ) {
    return this.definedBrandingService.updateBrandingProject(id, input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedBrandingProject, { name: 'archiveDefinedBrandingProject' })
  async archiveDefinedBrandingProject(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.definedBrandingService.archiveBrandingProject(id, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedBrandingProject, {
    name: 'updateDefinedBrandingProjectVisibility',
  })
  async updateDefinedBrandingProjectVisibility(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateDefinedBrandingProjectVisibilityInput,
    @CurrentUser() user: User,
  ) {
    return this.definedBrandingService.updateBrandingProjectVisibility(
      id,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => Boolean, { name: 'deleteDefinedBrandingProject' })
  async deleteDefinedBrandingProject(@Args('id', { type: () => Int }) id: number) {
    return this.definedBrandingService.deleteBrandingProject(id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedBrandingSection, { name: 'createDefinedBrandingSection' })
  async createDefinedBrandingSection(
    @Args('input') input: CreateDefinedBrandingSectionInput,
    @CurrentUser() user: User,
  ) {
    return this.definedBrandingService.createBrandingSection(input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedBrandingSection, { name: 'updateDefinedBrandingSection' })
  async updateDefinedBrandingSection(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateDefinedBrandingSectionInput,
    @CurrentUser() user: User,
  ) {
    return this.definedBrandingService.updateBrandingSection(id, input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => [DefinedBrandingSection], { name: 'reorderDefinedBrandingSections' })
  async reorderDefinedBrandingSections(
    @Args('input') input: ReorderDefinedBrandingSectionsInput,
    @CurrentUser() user: User,
  ) {
    return this.definedBrandingService.reorderBrandingSections(input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => Boolean, { name: 'deleteDefinedBrandingSection' })
  async deleteDefinedBrandingSection(@Args('id', { type: () => Int }) id: number) {
    return this.definedBrandingService.deleteBrandingSection(id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedBrandingAsset, { name: 'createDefinedBrandingAsset' })
  async createDefinedBrandingAsset(
    @Args('input') input: CreateDefinedBrandingAssetInput,
    @CurrentUser() user: User,
  ) {
    return this.definedBrandingService.createBrandingAsset(input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedBrandingAsset, { name: 'updateDefinedBrandingAsset' })
  async updateDefinedBrandingAsset(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateDefinedBrandingAssetInput,
    @CurrentUser() user: User,
  ) {
    return this.definedBrandingService.updateBrandingAsset(id, input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => Boolean, { name: 'deleteDefinedBrandingAsset' })
  async deleteDefinedBrandingAsset(@Args('id', { type: () => Int }) id: number) {
    return this.definedBrandingService.deleteBrandingAsset(id);
  }
}
