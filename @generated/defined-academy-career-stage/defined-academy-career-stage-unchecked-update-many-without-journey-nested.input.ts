import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCreateWithoutJourneyInput } from './defined-academy-career-stage-create-without-journey.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateOrConnectWithoutJourneyInput } from './defined-academy-career-stage-create-or-connect-without-journey.input';
import { DefinedAcademyCareerStageUpsertWithWhereUniqueWithoutJourneyInput } from './defined-academy-career-stage-upsert-with-where-unique-without-journey.input';
import { DefinedAcademyCareerStageCreateManyJourneyInputEnvelope } from './defined-academy-career-stage-create-many-journey-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';
import { DefinedAcademyCareerStageUpdateWithWhereUniqueWithoutJourneyInput } from './defined-academy-career-stage-update-with-where-unique-without-journey.input';
import { DefinedAcademyCareerStageUpdateManyWithWhereWithoutJourneyInput } from './defined-academy-career-stage-update-many-with-where-without-journey.input';
import { DefinedAcademyCareerStageScalarWhereInput } from './defined-academy-career-stage-scalar-where.input';

@InputType()
export class DefinedAcademyCareerStageUncheckedUpdateManyWithoutJourneyNestedInput {

    @Field(() => [DefinedAcademyCareerStageCreateWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateWithoutJourneyInput)
    create?: Array<DefinedAcademyCareerStageCreateWithoutJourneyInput>;

    @Field(() => [DefinedAcademyCareerStageCreateOrConnectWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateOrConnectWithoutJourneyInput)
    connectOrCreate?: Array<DefinedAcademyCareerStageCreateOrConnectWithoutJourneyInput>;

    @Field(() => [DefinedAcademyCareerStageUpsertWithWhereUniqueWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageUpsertWithWhereUniqueWithoutJourneyInput)
    upsert?: Array<DefinedAcademyCareerStageUpsertWithWhereUniqueWithoutJourneyInput>;

    @Field(() => DefinedAcademyCareerStageCreateManyJourneyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateManyJourneyInputEnvelope)
    createMany?: DefinedAcademyCareerStageCreateManyJourneyInputEnvelope;

    @Field(() => [DefinedAcademyCareerStageWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>>;

    @Field(() => [DefinedAcademyCareerStageWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>>;

    @Field(() => [DefinedAcademyCareerStageWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>>;

    @Field(() => [DefinedAcademyCareerStageWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>>;

    @Field(() => [DefinedAcademyCareerStageUpdateWithWhereUniqueWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageUpdateWithWhereUniqueWithoutJourneyInput)
    update?: Array<DefinedAcademyCareerStageUpdateWithWhereUniqueWithoutJourneyInput>;

    @Field(() => [DefinedAcademyCareerStageUpdateManyWithWhereWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageUpdateManyWithWhereWithoutJourneyInput)
    updateMany?: Array<DefinedAcademyCareerStageUpdateManyWithWhereWithoutJourneyInput>;

    @Field(() => [DefinedAcademyCareerStageScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageScalarWhereInput)
    deleteMany?: Array<DefinedAcademyCareerStageScalarWhereInput>;
}
