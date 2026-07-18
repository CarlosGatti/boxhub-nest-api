import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyLessonProgressInput } from './user-create-without-defined-academy-lesson-progress.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyLessonProgressInput } from './user-create-or-connect-without-defined-academy-lesson-progress.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDefinedAcademyLessonProgressInput {

    @Field(() => UserCreateWithoutDefinedAcademyLessonProgressInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyLessonProgressInput)
    create?: UserCreateWithoutDefinedAcademyLessonProgressInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyLessonProgressInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyLessonProgressInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyLessonProgressInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
