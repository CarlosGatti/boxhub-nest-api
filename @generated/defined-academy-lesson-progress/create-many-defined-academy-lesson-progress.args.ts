import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCreateManyInput } from './defined-academy-lesson-progress-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyLessonProgressArgs {

    @Field(() => [DefinedAcademyLessonProgressCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyLessonProgressCreateManyInput)
    data!: Array<DefinedAcademyLessonProgressCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
