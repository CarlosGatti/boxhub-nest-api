import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCreateWithoutStageInput } from './defined-academy-career-stage-content-create-without-stage.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentCreateOrConnectWithoutStageInput } from './defined-academy-career-stage-content-create-or-connect-without-stage.input';
import { DefinedAcademyCareerStageContentCreateManyStageInputEnvelope } from './defined-academy-career-stage-content-create-many-stage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageContentWhereUniqueInput } from './defined-academy-career-stage-content-where-unique.input';

@InputType()
export class DefinedAcademyCareerStageContentUncheckedCreateNestedManyWithoutStageInput {

    @Field(() => [DefinedAcademyCareerStageContentCreateWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateWithoutStageInput)
    create?: Array<DefinedAcademyCareerStageContentCreateWithoutStageInput>;

    @Field(() => [DefinedAcademyCareerStageContentCreateOrConnectWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateOrConnectWithoutStageInput)
    connectOrCreate?: Array<DefinedAcademyCareerStageContentCreateOrConnectWithoutStageInput>;

    @Field(() => DefinedAcademyCareerStageContentCreateManyStageInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateManyStageInputEnvelope)
    createMany?: DefinedAcademyCareerStageContentCreateManyStageInputEnvelope;

    @Field(() => [DefinedAcademyCareerStageContentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>>;
}
