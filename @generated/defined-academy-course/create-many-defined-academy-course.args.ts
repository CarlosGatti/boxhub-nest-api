import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateManyInput } from './defined-academy-course-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyCourseArgs {

    @Field(() => [DefinedAcademyCourseCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyCourseCreateManyInput)
    data!: Array<DefinedAcademyCourseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
