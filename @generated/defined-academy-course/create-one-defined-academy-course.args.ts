import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateInput } from './defined-academy-course-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyCourseArgs {

    @Field(() => DefinedAcademyCourseCreateInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateInput)
    data!: DefinedAcademyCourseCreateInput;
}
