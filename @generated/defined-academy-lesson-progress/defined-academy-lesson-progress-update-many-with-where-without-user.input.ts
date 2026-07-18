import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressScalarWhereInput } from './defined-academy-lesson-progress-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressUpdateManyMutationInput } from './defined-academy-lesson-progress-update-many-mutation.input';

@InputType()
export class DefinedAcademyLessonProgressUpdateManyWithWhereWithoutUserInput {

    @Field(() => DefinedAcademyLessonProgressScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressScalarWhereInput)
    where!: DefinedAcademyLessonProgressScalarWhereInput;

    @Field(() => DefinedAcademyLessonProgressUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressUpdateManyMutationInput)
    data!: DefinedAcademyLessonProgressUpdateManyMutationInput;
}
