import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyLessonProgressInput } from './user-create-without-defined-academy-lesson-progress.input';

@InputType()
export class UserCreateOrConnectWithoutDefinedAcademyLessonProgressInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDefinedAcademyLessonProgressInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyLessonProgressInput)
    create!: UserCreateWithoutDefinedAcademyLessonProgressInput;
}
