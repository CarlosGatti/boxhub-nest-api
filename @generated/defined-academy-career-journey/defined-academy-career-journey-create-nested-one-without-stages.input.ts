import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyCreateWithoutStagesInput } from './defined-academy-career-journey-create-without-stages.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateOrConnectWithoutStagesInput } from './defined-academy-career-journey-create-or-connect-without-stages.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';

@InputType()
export class DefinedAcademyCareerJourneyCreateNestedOneWithoutStagesInput {

    @Field(() => DefinedAcademyCareerJourneyCreateWithoutStagesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyCreateWithoutStagesInput)
    create?: DefinedAcademyCareerJourneyCreateWithoutStagesInput;

    @Field(() => DefinedAcademyCareerJourneyCreateOrConnectWithoutStagesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyCreateOrConnectWithoutStagesInput)
    connectOrCreate?: DefinedAcademyCareerJourneyCreateOrConnectWithoutStagesInput;

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;
}
