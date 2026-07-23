import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateWithoutJourneyInput } from './defined-academy-user-career-profile-create-without-journey.input';

@InputType()
export class DefinedAcademyUserCareerProfileCreateOrConnectWithoutJourneyInput {

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;

    @Field(() => DefinedAcademyUserCareerProfileCreateWithoutJourneyInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutJourneyInput)
    create!: DefinedAcademyUserCareerProfileCreateWithoutJourneyInput;
}
