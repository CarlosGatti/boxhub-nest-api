import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonUpdateWithoutProgressInput } from './defined-academy-lesson-update-without-progress.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonCreateWithoutProgressInput } from './defined-academy-lesson-create-without-progress.input';
import { DefinedAcademyLessonWhereInput } from './defined-academy-lesson-where.input';

@InputType()
export class DefinedAcademyLessonUpsertWithoutProgressInput {

    @Field(() => DefinedAcademyLessonUpdateWithoutProgressInput, {nullable:false})
    @Type(() => DefinedAcademyLessonUpdateWithoutProgressInput)
    update!: DefinedAcademyLessonUpdateWithoutProgressInput;

    @Field(() => DefinedAcademyLessonCreateWithoutProgressInput, {nullable:false})
    @Type(() => DefinedAcademyLessonCreateWithoutProgressInput)
    create!: DefinedAcademyLessonCreateWithoutProgressInput;

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereInput)
    where?: DefinedAcademyLessonWhereInput;
}
