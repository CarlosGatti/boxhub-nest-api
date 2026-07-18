import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';

@InputType()
export class DefinedAcademyCourseListRelationFilter {

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    every?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    some?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    none?: DefinedAcademyCourseWhereInput;
}
