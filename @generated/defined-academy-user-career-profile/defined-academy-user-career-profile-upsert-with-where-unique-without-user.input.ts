import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileUpdateWithoutUserInput } from './defined-academy-user-career-profile-update-without-user.input';
import { DefinedAcademyUserCareerProfileCreateWithoutUserInput } from './defined-academy-user-career-profile-create-without-user.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;

    @Field(() => DefinedAcademyUserCareerProfileUpdateWithoutUserInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileUpdateWithoutUserInput)
    update!: DefinedAcademyUserCareerProfileUpdateWithoutUserInput;

    @Field(() => DefinedAcademyUserCareerProfileCreateWithoutUserInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutUserInput)
    create!: DefinedAcademyUserCareerProfileCreateWithoutUserInput;
}
