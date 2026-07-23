import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateInput } from './defined-academy-career-journey-create.input';
import { DefinedAcademyCareerJourneyUpdateInput } from './defined-academy-career-journey-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyCareerJourneyArgs {

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCareerJourneyCreateInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyCreateInput)
    create!: DefinedAcademyCareerJourneyCreateInput;

    @Field(() => DefinedAcademyCareerJourneyUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyUpdateInput)
    update!: DefinedAcademyCareerJourneyUpdateInput;
}
