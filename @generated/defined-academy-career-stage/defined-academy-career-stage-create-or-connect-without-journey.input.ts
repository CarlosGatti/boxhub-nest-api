import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateWithoutJourneyInput } from './defined-academy-career-stage-create-without-journey.input';

@InputType()
export class DefinedAcademyCareerStageCreateOrConnectWithoutJourneyInput {

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;

    @Field(() => DefinedAcademyCareerStageCreateWithoutJourneyInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageCreateWithoutJourneyInput)
    create!: DefinedAcademyCareerStageCreateWithoutJourneyInput;
}
