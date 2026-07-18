import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonUpdateWithoutResourcesInput } from './defined-academy-lesson-update-without-resources.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonCreateWithoutResourcesInput } from './defined-academy-lesson-create-without-resources.input';
import { DefinedAcademyLessonWhereInput } from './defined-academy-lesson-where.input';

@InputType()
export class DefinedAcademyLessonUpsertWithoutResourcesInput {

    @Field(() => DefinedAcademyLessonUpdateWithoutResourcesInput, {nullable:false})
    @Type(() => DefinedAcademyLessonUpdateWithoutResourcesInput)
    update!: DefinedAcademyLessonUpdateWithoutResourcesInput;

    @Field(() => DefinedAcademyLessonCreateWithoutResourcesInput, {nullable:false})
    @Type(() => DefinedAcademyLessonCreateWithoutResourcesInput)
    create!: DefinedAcademyLessonCreateWithoutResourcesInput;

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereInput)
    where?: DefinedAcademyLessonWhereInput;
}
