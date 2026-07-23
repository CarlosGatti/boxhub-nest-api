import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateWithoutCurrentStageInput } from './defined-academy-user-career-profile-create-without-current-stage.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateOrConnectWithoutCurrentStageInput } from './defined-academy-user-career-profile-create-or-connect-without-current-stage.input';
import { DefinedAcademyUserCareerProfileCreateManyCurrentStageInputEnvelope } from './defined-academy-user-career-profile-create-many-current-stage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';

@InputType()
export class DefinedAcademyUserCareerProfileUncheckedCreateNestedManyWithoutCurrentStageInput {

    @Field(() => [DefinedAcademyUserCareerProfileCreateWithoutCurrentStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutCurrentStageInput)
    create?: Array<DefinedAcademyUserCareerProfileCreateWithoutCurrentStageInput>;

    @Field(() => [DefinedAcademyUserCareerProfileCreateOrConnectWithoutCurrentStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateOrConnectWithoutCurrentStageInput)
    connectOrCreate?: Array<DefinedAcademyUserCareerProfileCreateOrConnectWithoutCurrentStageInput>;

    @Field(() => DefinedAcademyUserCareerProfileCreateManyCurrentStageInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyCurrentStageInputEnvelope)
    createMany?: DefinedAcademyUserCareerProfileCreateManyCurrentStageInputEnvelope;

    @Field(() => [DefinedAcademyUserCareerProfileWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>>;
}
