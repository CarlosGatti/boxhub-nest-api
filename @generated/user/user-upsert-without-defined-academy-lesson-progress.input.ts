import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDefinedAcademyLessonProgressInput } from './user-update-without-defined-academy-lesson-progress.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyLessonProgressInput } from './user-create-without-defined-academy-lesson-progress.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDefinedAcademyLessonProgressInput {

    @Field(() => UserUpdateWithoutDefinedAcademyLessonProgressInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyLessonProgressInput)
    update!: UserUpdateWithoutDefinedAcademyLessonProgressInput;

    @Field(() => UserCreateWithoutDefinedAcademyLessonProgressInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyLessonProgressInput)
    create!: UserCreateWithoutDefinedAcademyLessonProgressInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
