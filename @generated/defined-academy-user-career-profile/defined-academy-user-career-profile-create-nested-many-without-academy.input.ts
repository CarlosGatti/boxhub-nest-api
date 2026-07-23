import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateWithoutAcademyInput } from './defined-academy-user-career-profile-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateOrConnectWithoutAcademyInput } from './defined-academy-user-career-profile-create-or-connect-without-academy.input';
import { DefinedAcademyUserCareerProfileCreateManyAcademyInputEnvelope } from './defined-academy-user-career-profile-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';

@InputType()
export class DefinedAcademyUserCareerProfileCreateNestedManyWithoutAcademyInput {

    @Field(() => [DefinedAcademyUserCareerProfileCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyUserCareerProfileCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyUserCareerProfileCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyUserCareerProfileCreateOrConnectWithoutAcademyInput>;

    @Field(() => DefinedAcademyUserCareerProfileCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyUserCareerProfileCreateManyAcademyInputEnvelope;

    @Field(() => [DefinedAcademyUserCareerProfileWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>>;
}
