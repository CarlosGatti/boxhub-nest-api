import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput } from './defined-academy-user-career-profile-create-without-completions.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateOrConnectWithoutCompletionsInput } from './defined-academy-user-career-profile-create-or-connect-without-completions.input';
import { DefinedAcademyUserCareerProfileUpsertWithoutCompletionsInput } from './defined-academy-user-career-profile-upsert-without-completions.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { DefinedAcademyUserCareerProfileUpdateToOneWithWhereWithoutCompletionsInput } from './defined-academy-user-career-profile-update-to-one-with-where-without-completions.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpdateOneRequiredWithoutCompletionsNestedInput {

    @Field(() => DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput)
    create?: DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput;

    @Field(() => DefinedAcademyUserCareerProfileCreateOrConnectWithoutCompletionsInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateOrConnectWithoutCompletionsInput)
    connectOrCreate?: DefinedAcademyUserCareerProfileCreateOrConnectWithoutCompletionsInput;

    @Field(() => DefinedAcademyUserCareerProfileUpsertWithoutCompletionsInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpsertWithoutCompletionsInput)
    upsert?: DefinedAcademyUserCareerProfileUpsertWithoutCompletionsInput;

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;

    @Field(() => DefinedAcademyUserCareerProfileUpdateToOneWithWhereWithoutCompletionsInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpdateToOneWithWhereWithoutCompletionsInput)
    update?: DefinedAcademyUserCareerProfileUpdateToOneWithWhereWithoutCompletionsInput;
}
