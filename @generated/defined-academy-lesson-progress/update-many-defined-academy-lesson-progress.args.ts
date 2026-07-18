import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressUpdateManyMutationInput } from './defined-academy-lesson-progress-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressWhereInput } from './defined-academy-lesson-progress-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyLessonProgressArgs {

    @Field(() => DefinedAcademyLessonProgressUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressUpdateManyMutationInput)
    data!: DefinedAcademyLessonProgressUpdateManyMutationInput;

    @Field(() => DefinedAcademyLessonProgressWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonProgressWhereInput)
    where?: DefinedAcademyLessonProgressWhereInput;
}
