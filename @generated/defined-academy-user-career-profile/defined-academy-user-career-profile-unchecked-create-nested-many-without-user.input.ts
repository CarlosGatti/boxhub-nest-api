import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateWithoutUserInput } from './defined-academy-user-career-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateOrConnectWithoutUserInput } from './defined-academy-user-career-profile-create-or-connect-without-user.input';
import { DefinedAcademyUserCareerProfileCreateManyUserInputEnvelope } from './defined-academy-user-career-profile-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';

@InputType()
export class DefinedAcademyUserCareerProfileUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [DefinedAcademyUserCareerProfileCreateWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutUserInput)
    create?: Array<DefinedAcademyUserCareerProfileCreateWithoutUserInput>;

    @Field(() => [DefinedAcademyUserCareerProfileCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<DefinedAcademyUserCareerProfileCreateOrConnectWithoutUserInput>;

    @Field(() => DefinedAcademyUserCareerProfileCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyUserInputEnvelope)
    createMany?: DefinedAcademyUserCareerProfileCreateManyUserInputEnvelope;

    @Field(() => [DefinedAcademyUserCareerProfileWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>>;
}
