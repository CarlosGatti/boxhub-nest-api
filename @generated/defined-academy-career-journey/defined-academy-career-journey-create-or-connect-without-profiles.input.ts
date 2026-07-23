import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateWithoutProfilesInput } from './defined-academy-career-journey-create-without-profiles.input';

@InputType()
export class DefinedAcademyCareerJourneyCreateOrConnectWithoutProfilesInput {

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCareerJourneyCreateWithoutProfilesInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyCreateWithoutProfilesInput)
    create!: DefinedAcademyCareerJourneyCreateWithoutProfilesInput;
}
