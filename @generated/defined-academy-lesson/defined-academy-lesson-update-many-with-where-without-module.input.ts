import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonScalarWhereInput } from './defined-academy-lesson-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonUpdateManyMutationInput } from './defined-academy-lesson-update-many-mutation.input';

@InputType()
export class DefinedAcademyLessonUpdateManyWithWhereWithoutModuleInput {

    @Field(() => DefinedAcademyLessonScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyLessonScalarWhereInput)
    where!: DefinedAcademyLessonScalarWhereInput;

    @Field(() => DefinedAcademyLessonUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyLessonUpdateManyMutationInput)
    data!: DefinedAcademyLessonUpdateManyMutationInput;
}
