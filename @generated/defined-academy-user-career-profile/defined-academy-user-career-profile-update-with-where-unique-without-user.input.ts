import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileUpdateWithoutUserInput } from './defined-academy-user-career-profile-update-without-user.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;

    @Field(() => DefinedAcademyUserCareerProfileUpdateWithoutUserInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileUpdateWithoutUserInput)
    data!: DefinedAcademyUserCareerProfileUpdateWithoutUserInput;
}
