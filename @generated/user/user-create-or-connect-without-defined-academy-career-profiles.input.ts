import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyCareerProfilesInput } from './user-create-without-defined-academy-career-profiles.input';

@InputType()
export class UserCreateOrConnectWithoutDefinedAcademyCareerProfilesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDefinedAcademyCareerProfilesInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyCareerProfilesInput)
    create!: UserCreateWithoutDefinedAcademyCareerProfilesInput;
}
