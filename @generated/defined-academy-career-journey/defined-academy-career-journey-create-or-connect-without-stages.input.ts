import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateWithoutStagesInput } from './defined-academy-career-journey-create-without-stages.input';

@InputType()
export class DefinedAcademyCareerJourneyCreateOrConnectWithoutStagesInput {

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCareerJourneyCreateWithoutStagesInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyCreateWithoutStagesInput)
    create!: DefinedAcademyCareerJourneyCreateWithoutStagesInput;
}
