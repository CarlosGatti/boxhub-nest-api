import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyUpdateInput } from './defined-academy-career-journey-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyCareerJourneyArgs {

    @Field(() => DefinedAcademyCareerJourneyUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyUpdateInput)
    data!: DefinedAcademyCareerJourneyUpdateInput;

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;
}
