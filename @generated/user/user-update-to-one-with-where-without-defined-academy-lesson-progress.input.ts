import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDefinedAcademyLessonProgressInput } from './user-update-without-defined-academy-lesson-progress.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDefinedAcademyLessonProgressInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDefinedAcademyLessonProgressInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyLessonProgressInput)
    data!: UserUpdateWithoutDefinedAcademyLessonProgressInput;
}
