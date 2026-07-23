import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput } from './defined-academy-user-career-profile-create-without-completions.input';

@InputType()
export class DefinedAcademyUserCareerProfileCreateOrConnectWithoutCompletionsInput {

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;

    @Field(() => DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput)
    create!: DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput;
}
