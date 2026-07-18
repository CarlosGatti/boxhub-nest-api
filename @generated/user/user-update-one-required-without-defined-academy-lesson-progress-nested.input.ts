import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyLessonProgressInput } from './user-create-without-defined-academy-lesson-progress.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyLessonProgressInput } from './user-create-or-connect-without-defined-academy-lesson-progress.input';
import { UserUpsertWithoutDefinedAcademyLessonProgressInput } from './user-upsert-without-defined-academy-lesson-progress.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDefinedAcademyLessonProgressInput } from './user-update-to-one-with-where-without-defined-academy-lesson-progress.input';

@InputType()
export class UserUpdateOneRequiredWithoutDefinedAcademyLessonProgressNestedInput {

    @Field(() => UserCreateWithoutDefinedAcademyLessonProgressInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyLessonProgressInput)
    create?: UserCreateWithoutDefinedAcademyLessonProgressInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyLessonProgressInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyLessonProgressInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyLessonProgressInput;

    @Field(() => UserUpsertWithoutDefinedAcademyLessonProgressInput, {nullable:true})
    @Type(() => UserUpsertWithoutDefinedAcademyLessonProgressInput)
    upsert?: UserUpsertWithoutDefinedAcademyLessonProgressInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDefinedAcademyLessonProgressInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDefinedAcademyLessonProgressInput)
    update?: UserUpdateToOneWithWhereWithoutDefinedAcademyLessonProgressInput;
}
