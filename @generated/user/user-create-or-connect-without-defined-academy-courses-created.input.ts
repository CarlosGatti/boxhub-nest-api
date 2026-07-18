import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyCoursesCreatedInput } from './user-create-without-defined-academy-courses-created.input';

@InputType()
export class UserCreateOrConnectWithoutDefinedAcademyCoursesCreatedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDefinedAcademyCoursesCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyCoursesCreatedInput)
    create!: UserCreateWithoutDefinedAcademyCoursesCreatedInput;
}
