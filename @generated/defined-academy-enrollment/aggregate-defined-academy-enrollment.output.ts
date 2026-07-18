import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCountAggregate } from './defined-academy-enrollment-count-aggregate.output';
import { DefinedAcademyEnrollmentAvgAggregate } from './defined-academy-enrollment-avg-aggregate.output';
import { DefinedAcademyEnrollmentSumAggregate } from './defined-academy-enrollment-sum-aggregate.output';
import { DefinedAcademyEnrollmentMinAggregate } from './defined-academy-enrollment-min-aggregate.output';
import { DefinedAcademyEnrollmentMaxAggregate } from './defined-academy-enrollment-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyEnrollment {

    @Field(() => DefinedAcademyEnrollmentCountAggregate, {nullable:true})
    _count?: DefinedAcademyEnrollmentCountAggregate;

    @Field(() => DefinedAcademyEnrollmentAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyEnrollmentAvgAggregate;

    @Field(() => DefinedAcademyEnrollmentSumAggregate, {nullable:true})
    _sum?: DefinedAcademyEnrollmentSumAggregate;

    @Field(() => DefinedAcademyEnrollmentMinAggregate, {nullable:true})
    _min?: DefinedAcademyEnrollmentMinAggregate;

    @Field(() => DefinedAcademyEnrollmentMaxAggregate, {nullable:true})
    _max?: DefinedAcademyEnrollmentMaxAggregate;
}
