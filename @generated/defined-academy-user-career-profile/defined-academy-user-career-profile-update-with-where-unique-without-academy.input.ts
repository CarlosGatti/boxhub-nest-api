import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileUpdateWithoutAcademyInput } from './defined-academy-user-career-profile-update-without-academy.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutAcademyInput {

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;

    @Field(() => DefinedAcademyUserCareerProfileUpdateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileUpdateWithoutAcademyInput)
    data!: DefinedAcademyUserCareerProfileUpdateWithoutAcademyInput;
}
