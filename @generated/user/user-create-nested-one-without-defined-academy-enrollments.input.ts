import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyEnrollmentsInput } from './user-create-without-defined-academy-enrollments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyEnrollmentsInput } from './user-create-or-connect-without-defined-academy-enrollments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDefinedAcademyEnrollmentsInput {

    @Field(() => UserCreateWithoutDefinedAcademyEnrollmentsInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyEnrollmentsInput)
    create?: UserCreateWithoutDefinedAcademyEnrollmentsInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyEnrollmentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyEnrollmentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyEnrollmentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
