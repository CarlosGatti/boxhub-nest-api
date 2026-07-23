import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyCareerProfilesInput } from './user-create-without-defined-academy-career-profiles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyCareerProfilesInput } from './user-create-or-connect-without-defined-academy-career-profiles.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDefinedAcademyCareerProfilesInput {

    @Field(() => UserCreateWithoutDefinedAcademyCareerProfilesInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyCareerProfilesInput)
    create?: UserCreateWithoutDefinedAcademyCareerProfilesInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyCareerProfilesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyCareerProfilesInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyCareerProfilesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
