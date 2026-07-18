import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseOrderByWithAggregationInput } from './defined-academy-course-order-by-with-aggregation.input';
import { DefinedAcademyCourseScalarFieldEnum } from './defined-academy-course-scalar-field.enum';
import { DefinedAcademyCourseScalarWhereWithAggregatesInput } from './defined-academy-course-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCourseCountAggregateInput } from './defined-academy-course-count-aggregate.input';
import { DefinedAcademyCourseAvgAggregateInput } from './defined-academy-course-avg-aggregate.input';
import { DefinedAcademyCourseSumAggregateInput } from './defined-academy-course-sum-aggregate.input';
import { DefinedAcademyCourseMinAggregateInput } from './defined-academy-course-min-aggregate.input';
import { DefinedAcademyCourseMaxAggregateInput } from './defined-academy-course-max-aggregate.input';

@ArgsType()
export class DefinedAcademyCourseGroupByArgs {

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;

    @Field(() => [DefinedAcademyCourseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyCourseOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyCourseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyCourseScalarFieldEnum>;

    @Field(() => DefinedAcademyCourseScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyCourseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyCourseCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyCourseCountAggregateInput;

    @Field(() => DefinedAcademyCourseAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyCourseAvgAggregateInput;

    @Field(() => DefinedAcademyCourseSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyCourseSumAggregateInput;

    @Field(() => DefinedAcademyCourseMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyCourseMinAggregateInput;

    @Field(() => DefinedAcademyCourseMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyCourseMaxAggregateInput;
}
