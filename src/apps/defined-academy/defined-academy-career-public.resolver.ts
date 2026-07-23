import { Args, Query, Resolver } from '@nestjs/graphql';
import { DefinedAcademyCareerJourney } from '@generated/defined-academy-career-journey/defined-academy-career-journey.model';
import { DefinedAcademyCareerService } from './defined-academy-career.service';

@Resolver()
export class DefinedAcademyCareerPublicResolver {
  constructor(
    private readonly definedAcademyCareerService: DefinedAcademyCareerService,
  ) {}

  @Query(() => DefinedAcademyCareerJourney, {
    name: 'definedAcademyCareerJourneyByAcademySlug',
    nullable: true,
  })
  async definedAcademyCareerJourneyByAcademySlug(
    @Args('academySlug') academySlug: string,
  ) {
    return this.definedAcademyCareerService.getPublicCareerJourneyByAcademySlug(
      academySlug,
    );
  }
}
