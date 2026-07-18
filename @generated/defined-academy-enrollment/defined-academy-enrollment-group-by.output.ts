import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentStatus } from '../prisma/defined-academy-enrollment-status.enum';
import { DefinedAcademyEnrollmentCountAggregate } from './defined-academy-enrollment-count-aggregate.output';
import { DefinedAcademyEnrollmentAvgAggregate } from './defined-academy-enrollment-avg-aggregate.output';
import { DefinedAcademyEnrollmentSumAggregate } from './defined-academy-enrollment-sum-aggregate.output';
import { DefinedAcademyEnrollmentMinAggregate } from './defined-academy-enrollment-min-aggregate.output';
import { DefinedAcademyEnrollmentMaxAggregate } from './defined-academy-enrollment-max-aggregate.output';

@ObjectType()
export class DefinedAcademyEnrollmentGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    courseId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => DefinedAcademyEnrollmentStatus, {nullable:false})
    status!: keyof typeof DefinedAcademyEnrollmentStatus;

    @Field(() => Date, {nullable:false})
    enrolledAt!: Date | string;

    @Field(() => Date, {nullable:true})
    startedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    lastAccessedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
