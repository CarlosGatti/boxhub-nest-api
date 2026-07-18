import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';

@InputType()
export class DefinedAcademyCourseNullableRelationFilter {

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    is?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    isNot?: DefinedAcademyCourseWhereInput;
}
