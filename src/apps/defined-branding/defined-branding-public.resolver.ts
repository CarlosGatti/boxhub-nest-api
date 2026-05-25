import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { DefinedBrandingProjectStatus } from '@generated/prisma/defined-branding-project-status.enum';
import { DefinedBrandingService } from './defined-branding.service';
import { DefinedPublicBrandingProject } from './types/defined-public-branding-project.type';

@Resolver()
export class DefinedBrandingPublicResolver {
  constructor(private readonly definedBrandingService: DefinedBrandingService) {}

  @Query(() => [DefinedPublicBrandingProject], {
    name: 'definedPublicBrandingProjects',
  })
  async definedPublicBrandingProjects(
    @Args('status', { type: () => DefinedBrandingProjectStatus, nullable: true })
    status?: DefinedBrandingProjectStatus,
    @Args('featuredOnly', { type: () => Boolean, nullable: true })
    featuredOnly?: boolean,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
  ) {
    return this.definedBrandingService.listPublicBrandingProjects(
      status,
      featuredOnly,
      take,
      skip,
    );
  }

  @Query(() => DefinedPublicBrandingProject, {
    name: 'definedPublicBrandingProjectBySlug',
    nullable: true,
  })
  async definedPublicBrandingProjectBySlug(@Args('slug') slug: string) {
    return this.definedBrandingService.getPublicBrandingProjectBySlug(slug);
  }
}
