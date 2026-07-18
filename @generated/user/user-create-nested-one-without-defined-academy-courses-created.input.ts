import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyCoursesCreatedInput } from './user-create-without-defined-academy-courses-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyCoursesCreatedInput } from './user-create-or-connect-without-defined-academy-courses-created.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDefinedAcademyCoursesCreatedInput {

    @Field(() => UserCreateWithoutDefinedAcademyCoursesCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyCoursesCreatedInput)
    create?: UserCreateWithoutDefinedAcademyCoursesCreatedInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyCoursesCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyCoursesCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyCoursesCreatedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
