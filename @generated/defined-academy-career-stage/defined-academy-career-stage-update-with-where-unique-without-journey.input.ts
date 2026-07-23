import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageUpdateWithoutJourneyInput } from './defined-academy-career-stage-update-without-journey.input';

@InputType()
export class DefinedAcademyCareerStageUpdateWithWhereUniqueWithoutJourneyInput {

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;

    @Field(() => DefinedAcademyCareerStageUpdateWithoutJourneyInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageUpdateWithoutJourneyInput)
    data!: DefinedAcademyCareerStageUpdateWithoutJourneyInput;
}
