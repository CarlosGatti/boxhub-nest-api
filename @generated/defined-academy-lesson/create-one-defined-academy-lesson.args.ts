import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonCreateInput } from './defined-academy-lesson-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyLessonArgs {

    @Field(() => DefinedAcademyLessonCreateInput, {nullable:false})
    @Type(() => DefinedAcademyLessonCreateInput)
    data!: DefinedAcademyLessonCreateInput;
}
