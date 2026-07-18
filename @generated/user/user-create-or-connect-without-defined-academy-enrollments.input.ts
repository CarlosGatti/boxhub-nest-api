import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyEnrollmentsInput } from './user-create-without-defined-academy-enrollments.input';

@InputType()
export class UserCreateOrConnectWithoutDefinedAcademyEnrollmentsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDefinedAcademyEnrollmentsInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyEnrollmentsInput)
    create!: UserCreateWithoutDefinedAcademyEnrollmentsInput;
}
