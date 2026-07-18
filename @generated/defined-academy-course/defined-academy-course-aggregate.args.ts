import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseOrderByWithRelationInput } from './defined-academy-course-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCourseCountAggregateInput } from './defined-academy-course-count-aggregate.input';
import { DefinedAcademyCourseAvgAggregateInput } from './defined-academy-course-avg-aggregate.input';
import { DefinedAcademyCourseSumAggregateInput } from './defined-academy-course-sum-aggregate.input';
import { DefinedAcademyCourseMinAggregateInput } from './defined-academy-course-min-aggregate.input';
import { DefinedAcademyCourseMaxAggregateInput } from './defined-academy-course-max-aggregate.input';

@ArgsType()
export class DefinedAcademyCourseAggregateArgs {

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;

    @Field(() => [DefinedAcademyCourseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyCourseOrderByWithRelationInput>;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

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
