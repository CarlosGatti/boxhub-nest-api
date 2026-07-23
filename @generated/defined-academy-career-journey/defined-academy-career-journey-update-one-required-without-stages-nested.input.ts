import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyCreateWithoutStagesInput } from './defined-academy-career-journey-create-without-stages.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateOrConnectWithoutStagesInput } from './defined-academy-career-journey-create-or-connect-without-stages.input';
import { DefinedAcademyCareerJourneyUpsertWithoutStagesInput } from './defined-academy-career-journey-upsert-without-stages.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';
import { DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutStagesInput } from './defined-academy-career-journey-update-to-one-with-where-without-stages.input';

@InputType()
export class DefinedAcademyCareerJourneyUpdateOneRequiredWithoutStagesNestedInput {

    @Field(() => DefinedAcademyCareerJourneyCreateWithoutStagesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyCreateWithoutStagesInput)
    create?: DefinedAcademyCareerJourneyCreateWithoutStagesInput;

    @Field(() => DefinedAcademyCareerJourneyCreateOrConnectWithoutStagesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyCreateOrConnectWithoutStagesInput)
    connectOrCreate?: DefinedAcademyCareerJourneyCreateOrConnectWithoutStagesInput;

    @Field(() => DefinedAcademyCareerJourneyUpsertWithoutStagesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyUpsertWithoutStagesInput)
    upsert?: DefinedAcademyCareerJourneyUpsertWithoutStagesInput;

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutStagesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutStagesInput)
    update?: DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutStagesInput;
}
