import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyCreateWithoutProfilesInput } from './defined-academy-career-journey-create-without-profiles.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateOrConnectWithoutProfilesInput } from './defined-academy-career-journey-create-or-connect-without-profiles.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';

@InputType()
export class DefinedAcademyCareerJourneyCreateNestedOneWithoutProfilesInput {

    @Field(() => DefinedAcademyCareerJourneyCreateWithoutProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyCreateWithoutProfilesInput)
    create?: DefinedAcademyCareerJourneyCreateWithoutProfilesInput;

    @Field(() => DefinedAcademyCareerJourneyCreateOrConnectWithoutProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: DefinedAcademyCareerJourneyCreateOrConnectWithoutProfilesInput;

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;
}
