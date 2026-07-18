import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyCourseCountAggregate } from './defined-academy-course-count-aggregate.output';
import { DefinedAcademyCourseAvgAggregate } from './defined-academy-course-avg-aggregate.output';
import { DefinedAcademyCourseSumAggregate } from './defined-academy-course-sum-aggregate.output';
import { DefinedAcademyCourseMinAggregate } from './defined-academy-course-min-aggregate.output';
import { DefinedAcademyCourseMaxAggregate } from './defined-academy-course-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyCourse {

    @Field(() => DefinedAcademyCourseCountAggregate, {nullable:true})
    _count?: DefinedAcademyCourseCountAggregate;

    @Field(() => DefinedAcademyCourseAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyCourseAvgAggregate;

    @Field(() => DefinedAcademyCourseSumAggregate, {nullable:true})
    _sum?: DefinedAcademyCourseSumAggregate;

    @Field(() => DefinedAcademyCourseMinAggregate, {nullable:true})
    _min?: DefinedAcademyCourseMinAggregate;

    @Field(() => DefinedAcademyCourseMaxAggregate, {nullable:true})
    _max?: DefinedAcademyCourseMaxAggregate;
}
