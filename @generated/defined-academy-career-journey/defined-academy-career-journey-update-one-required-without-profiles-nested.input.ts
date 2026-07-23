import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyCreateWithoutProfilesInput } from './defined-academy-career-journey-create-without-profiles.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateOrConnectWithoutProfilesInput } from './defined-academy-career-journey-create-or-connect-without-profiles.input';
import { DefinedAcademyCareerJourneyUpsertWithoutProfilesInput } from './defined-academy-career-journey-upsert-without-profiles.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';
import { DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutProfilesInput } from './defined-academy-career-journey-update-to-one-with-where-without-profiles.input';

@InputType()
export class DefinedAcademyCareerJourneyUpdateOneRequiredWithoutProfilesNestedInput {

    @Field(() => DefinedAcademyCareerJourneyCreateWithoutProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyCreateWithoutProfilesInput)
    create?: DefinedAcademyCareerJourneyCreateWithoutProfilesInput;

    @Field(() => DefinedAcademyCareerJourneyCreateOrConnectWithoutProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: DefinedAcademyCareerJourneyCreateOrConnectWithoutProfilesInput;

    @Field(() => DefinedAcademyCareerJourneyUpsertWithoutProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyUpsertWithoutProfilesInput)
    upsert?: DefinedAcademyCareerJourneyUpsertWithoutProfilesInput;

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutProfilesInput)
    update?: DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutProfilesInput;
}
