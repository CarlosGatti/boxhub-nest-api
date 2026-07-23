import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateWithoutUserInput } from './defined-academy-user-career-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateOrConnectWithoutUserInput } from './defined-academy-user-career-profile-create-or-connect-without-user.input';
import { DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutUserInput } from './defined-academy-user-career-profile-upsert-with-where-unique-without-user.input';
import { DefinedAcademyUserCareerProfileCreateManyUserInputEnvelope } from './defined-academy-user-career-profile-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutUserInput } from './defined-academy-user-career-profile-update-with-where-unique-without-user.input';
import { DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutUserInput } from './defined-academy-user-career-profile-update-many-with-where-without-user.input';
import { DefinedAcademyUserCareerProfileScalarWhereInput } from './defined-academy-user-career-profile-scalar-where.input';

@InputType()
export class DefinedAcademyUserCareerProfileUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [DefinedAcademyUserCareerProfileCreateWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutUserInput)
    create?: Array<DefinedAcademyUserCareerProfileCreateWithoutUserInput>;

    @Field(() => [DefinedAcademyUserCareerProfileCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<DefinedAcademyUserCareerProfileCreateOrConnectWithoutUserInput>;

    @Field(() => [DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => DefinedAcademyUserCareerProfileCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyUserInputEnvelope)
    createMany?: DefinedAcademyUserCareerProfileCreateManyUserInputEnvelope;

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

    @Field(() => [DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [DefinedAcademyUserCareerProfileScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileScalarWhereInput)
    deleteMany?: Array<DefinedAcademyUserCareerProfileScalarWhereInput>;
}
