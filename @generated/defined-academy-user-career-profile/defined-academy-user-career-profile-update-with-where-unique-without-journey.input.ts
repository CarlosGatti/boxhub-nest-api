import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileUpdateWithoutJourneyInput } from './defined-academy-user-career-profile-update-without-journey.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutJourneyInput {

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;

    @Field(() => DefinedAcademyUserCareerProfileUpdateWithoutJourneyInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileUpdateWithoutJourneyInput)
    data!: DefinedAcademyUserCareerProfileUpdateWithoutJourneyInput;
}
