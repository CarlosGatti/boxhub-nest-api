import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonWhereInput } from './defined-academy-lesson-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonUpdateWithoutResourcesInput } from './defined-academy-lesson-update-without-resources.input';

@InputType()
export class DefinedAcademyLessonUpdateToOneWithWhereWithoutResourcesInput {

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereInput)
    where?: DefinedAcademyLessonWhereInput;

    @Field(() => DefinedAcademyLessonUpdateWithoutResourcesInput, {nullable:false})
    @Type(() => DefinedAcademyLessonUpdateWithoutResourcesInput)
    data!: DefinedAcademyLessonUpdateWithoutResourcesInput;
}
