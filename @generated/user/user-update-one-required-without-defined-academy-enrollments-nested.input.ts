import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyEnrollmentsInput } from './user-create-without-defined-academy-enrollments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyEnrollmentsInput } from './user-create-or-connect-without-defined-academy-enrollments.input';
import { UserUpsertWithoutDefinedAcademyEnrollmentsInput } from './user-upsert-without-defined-academy-enrollments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDefinedAcademyEnrollmentsInput } from './user-update-to-one-with-where-without-defined-academy-enrollments.input';

@InputType()
export class UserUpdateOneRequiredWithoutDefinedAcademyEnrollmentsNestedInput {

    @Field(() => UserCreateWithoutDefinedAcademyEnrollmentsInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyEnrollmentsInput)
    create?: UserCreateWithoutDefinedAcademyEnrollmentsInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyEnrollmentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyEnrollmentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyEnrollmentsInput;

    @Field(() => UserUpsertWithoutDefinedAcademyEnrollmentsInput, {nullable:true})
    @Type(() => UserUpsertWithoutDefinedAcademyEnrollmentsInput)
    upsert?: UserUpsertWithoutDefinedAcademyEnrollmentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDefinedAcademyEnrollmentsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDefinedAcademyEnrollmentsInput)
    update?: UserUpdateToOneWithWhereWithoutDefinedAcademyEnrollmentsInput;
}
