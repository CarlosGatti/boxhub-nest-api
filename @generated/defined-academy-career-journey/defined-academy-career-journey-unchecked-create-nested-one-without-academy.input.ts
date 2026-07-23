import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyCreateWithoutAcademyInput } from './defined-academy-career-journey-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateOrConnectWithoutAcademyInput } from './defined-academy-career-journey-create-or-connect-without-academy.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';

@InputType()
export class DefinedAcademyCareerJourneyUncheckedCreateNestedOneWithoutAcademyInput {

    @Field(() => DefinedAcademyCareerJourneyCreateWithoutAcademyInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyCreateWithoutAcademyInput)
    create?: DefinedAcademyCareerJourneyCreateWithoutAcademyInput;

    @Field(() => DefinedAcademyCareerJourneyCreateOrConnectWithoutAcademyInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: DefinedAcademyCareerJourneyCreateOrConnectWithoutAcademyInput;

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;
}
