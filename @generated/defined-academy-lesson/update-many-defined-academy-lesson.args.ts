import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonUpdateManyMutationInput } from './defined-academy-lesson-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonWhereInput } from './defined-academy-lesson-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyLessonArgs {

    @Field(() => DefinedAcademyLessonUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyLessonUpdateManyMutationInput)
    data!: DefinedAcademyLessonUpdateManyMutationInput;

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereInput)
    where?: DefinedAcademyLessonWhereInput;
}
