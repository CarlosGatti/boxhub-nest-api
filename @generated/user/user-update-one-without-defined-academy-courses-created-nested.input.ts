import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyCoursesCreatedInput } from './user-create-without-defined-academy-courses-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyCoursesCreatedInput } from './user-create-or-connect-without-defined-academy-courses-created.input';
import { UserUpsertWithoutDefinedAcademyCoursesCreatedInput } from './user-upsert-without-defined-academy-courses-created.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDefinedAcademyCoursesCreatedInput } from './user-update-to-one-with-where-without-defined-academy-courses-created.input';

@InputType()
export class UserUpdateOneWithoutDefinedAcademyCoursesCreatedNestedInput {

    @Field(() => UserCreateWithoutDefinedAcademyCoursesCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyCoursesCreatedInput)
    create?: UserCreateWithoutDefinedAcademyCoursesCreatedInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyCoursesCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyCoursesCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyCoursesCreatedInput;

    @Field(() => UserUpsertWithoutDefinedAcademyCoursesCreatedInput, {nullable:true})
    @Type(() => UserUpsertWithoutDefinedAcademyCoursesCreatedInput)
    upsert?: UserUpsertWithoutDefinedAcademyCoursesCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDefinedAcademyCoursesCreatedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDefinedAcademyCoursesCreatedInput)
    update?: UserUpdateToOneWithWhereWithoutDefinedAcademyCoursesCreatedInput;
}
