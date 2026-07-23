import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateWithoutAcademyInput } from './defined-academy-user-career-profile-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateOrConnectWithoutAcademyInput } from './defined-academy-user-career-profile-create-or-connect-without-academy.input';
import { DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutAcademyInput } from './defined-academy-user-career-profile-upsert-with-where-unique-without-academy.input';
import { DefinedAcademyUserCareerProfileCreateManyAcademyInputEnvelope } from './defined-academy-user-career-profile-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutAcademyInput } from './defined-academy-user-career-profile-update-with-where-unique-without-academy.input';
import { DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutAcademyInput } from './defined-academy-user-career-profile-update-many-with-where-without-academy.input';
import { DefinedAcademyUserCareerProfileScalarWhereInput } from './defined-academy-user-career-profile-scalar-where.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpdateManyWithoutAcademyNestedInput {

    @Field(() => [DefinedAcademyUserCareerProfileCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyUserCareerProfileCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyUserCareerProfileCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyUserCareerProfileCreateOrConnectWithoutAcademyInput>;

    @Field(() => [DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutAcademyInput)
    upsert?: Array<DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutAcademyInput>;

    @Field(() => DefinedAcademyUserCareerProfileCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyUserCareerProfileCreateManyAcademyInputEnvelope;

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

    @Field(() => [DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutAcademyInput)
    update?: Array<DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutAcademyInput>;

    @Field(() => [DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutAcademyInput)
    updateMany?: Array<DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutAcademyInput>;

    @Field(() => [DefinedAcademyUserCareerProfileScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileScalarWhereInput)
    deleteMany?: Array<DefinedAcademyUserCareerProfileScalarWhereInput>;
}
