import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonWhereInput } from './defined-academy-lesson-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonUpdateWithoutProgressInput } from './defined-academy-lesson-update-without-progress.input';

@InputType()
export class DefinedAcademyLessonUpdateToOneWithWhereWithoutProgressInput {

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereInput)
    where?: DefinedAcademyLessonWhereInput;

    @Field(() => DefinedAcademyLessonUpdateWithoutProgressInput, {nullable:false})
    @Type(() => DefinedAcademyLessonUpdateWithoutProgressInput)
    data!: DefinedAcademyLessonUpdateWithoutProgressInput;
}
