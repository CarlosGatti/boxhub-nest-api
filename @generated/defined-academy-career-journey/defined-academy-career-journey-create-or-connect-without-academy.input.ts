import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateWithoutAcademyInput } from './defined-academy-career-journey-create-without-academy.input';

@InputType()
export class DefinedAcademyCareerJourneyCreateOrConnectWithoutAcademyInput {

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCareerJourneyCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyCreateWithoutAcademyInput)
    create!: DefinedAcademyCareerJourneyCreateWithoutAcademyInput;
}
