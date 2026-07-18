import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonCreateManyInput } from './defined-academy-lesson-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyLessonArgs {

    @Field(() => [DefinedAcademyLessonCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyLessonCreateManyInput)
    data!: Array<DefinedAcademyLessonCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
