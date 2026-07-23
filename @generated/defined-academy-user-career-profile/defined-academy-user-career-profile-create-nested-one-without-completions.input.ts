import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput } from './defined-academy-user-career-profile-create-without-completions.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateOrConnectWithoutCompletionsInput } from './defined-academy-user-career-profile-create-or-connect-without-completions.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';

@InputType()
export class DefinedAcademyUserCareerProfileCreateNestedOneWithoutCompletionsInput {

    @Field(() => DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput)
    create?: DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput;

    @Field(() => DefinedAcademyUserCareerProfileCreateOrConnectWithoutCompletionsInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateOrConnectWithoutCompletionsInput)
    connectOrCreate?: DefinedAcademyUserCareerProfileCreateOrConnectWithoutCompletionsInput;

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;
}
