import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCreateWithoutJourneyInput } from './defined-academy-career-stage-create-without-journey.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateOrConnectWithoutJourneyInput } from './defined-academy-career-stage-create-or-connect-without-journey.input';
import { DefinedAcademyCareerStageCreateManyJourneyInputEnvelope } from './defined-academy-career-stage-create-many-journey-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';

@InputType()
export class DefinedAcademyCareerStageUncheckedCreateNestedManyWithoutJourneyInput {

    @Field(() => [DefinedAcademyCareerStageCreateWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateWithoutJourneyInput)
    create?: Array<DefinedAcademyCareerStageCreateWithoutJourneyInput>;

    @Field(() => [DefinedAcademyCareerStageCreateOrConnectWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateOrConnectWithoutJourneyInput)
    connectOrCreate?: Array<DefinedAcademyCareerStageCreateOrConnectWithoutJourneyInput>;

    @Field(() => DefinedAcademyCareerStageCreateManyJourneyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateManyJourneyInputEnvelope)
    createMany?: DefinedAcademyCareerStageCreateManyJourneyInputEnvelope;

    @Field(() => [DefinedAcademyCareerStageWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>>;
}
