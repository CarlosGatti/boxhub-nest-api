import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDefinedAcademyCareerJourneyArgs {

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;
}
