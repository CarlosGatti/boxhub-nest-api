import { Field, ObjectType } from '@nestjs/graphql';
import { DefinedAcademyCareerStage } from '@generated/defined-academy-career-stage/defined-academy-career-stage.model';
import { DefinedAcademyCourse } from '@generated/defined-academy-course/defined-academy-course.model';
import { DefinedAcademyResource } from '@generated/defined-academy-resource/defined-academy-resource.model';

@ObjectType()
export class DefinedAcademyCareerRecommendations {
  @Field(() => DefinedAcademyCareerStage, { nullable: true })
  stage?: DefinedAcademyCareerStage | null;

  @Field(() => [DefinedAcademyCourse])
  courses: DefinedAcademyCourse[];

  @Field(() => [DefinedAcademyResource])
  resources: DefinedAcademyResource[];
}
