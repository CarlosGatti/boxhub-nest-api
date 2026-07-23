import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateWithoutCurrentStageInput } from './defined-academy-user-career-profile-create-without-current-stage.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateOrConnectWithoutCurrentStageInput } from './defined-academy-user-career-profile-create-or-connect-without-current-stage.input';
import { DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutCurrentStageInput } from './defined-academy-user-career-profile-upsert-with-where-unique-without-current-stage.input';
import { DefinedAcademyUserCareerProfileCreateManyCurrentStageInputEnvelope } from './defined-academy-user-career-profile-create-many-current-stage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutCurrentStageInput } from './defined-academy-user-career-profile-update-with-where-unique-without-current-stage.input';
import { DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutCurrentStageInput } from './defined-academy-user-career-profile-update-many-with-where-without-current-stage.input';
import { DefinedAcademyUserCareerProfileScalarWhereInput } from './defined-academy-user-career-profile-scalar-where.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpdateManyWithoutCurrentStageNestedInput {

    @Field(() => [DefinedAcademyUserCareerProfileCreateWithoutCurrentStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutCurrentStageInput)
    create?: Array<DefinedAcademyUserCareerProfileCreateWithoutCurrentStageInput>;

    @Field(() => [DefinedAcademyUserCareerProfileCreateOrConnectWithoutCurrentStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateOrConnectWithoutCurrentStageInput)
    connectOrCreate?: Array<DefinedAcademyUserCareerProfileCreateOrConnectWithoutCurrentStageInput>;

    @Field(() => [DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutCurrentStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutCurrentStageInput)
    upsert?: Array<DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutCurrentStageInput>;

    @Field(() => DefinedAcademyUserCareerProfileCreateManyCurrentStageInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyCurrentStageInputEnvelope)
    createMany?: DefinedAcademyUserCareerProfileCreateManyCurrentStageInputEnvelope;

    @Field(() => [DefinedAcademyUserCareerProfileWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>>;

    @Field(() => [DefinedAcademyUserCareerProfileWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>>;

    @Field(() => [DefinedAcademyUserCareerProfileWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>>;

    @Field(() => [DefinedAcademyUserCareerProfileWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>>;

    @Field(() => [DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutCurrentStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutCurrentStageInput)
    update?: Array<DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutCurrentStageInput>;

    @Field(() => [DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutCurrentStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutCurrentStageInput)
    updateMany?: Array<DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutCurrentStageInput>;

    @Field(() => [DefinedAcademyUserCareerProfileScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileScalarWhereInput)
    deleteMany?: Array<DefinedAcademyUserCareerProfileScalarWhereInput>;
}
