import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateWithoutAcademyInput } from './defined-academy-user-career-profile-create-without-academy.input';

@InputType()
export class DefinedAcademyUserCareerProfileCreateOrConnectWithoutAcademyInput {

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;

    @Field(() => DefinedAcademyUserCareerProfileCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutAcademyInput)
    create!: DefinedAcademyUserCareerProfileCreateWithoutAcademyInput;
}
