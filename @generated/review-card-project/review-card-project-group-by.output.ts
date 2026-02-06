import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardProjectStatus } from '../prisma/review-card-project-status.enum';
import { ReviewCardLinkMode } from '../prisma/review-card-link-mode.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ReviewCardProjectCountAggregate } from './review-card-project-count-aggregate.output';
import { ReviewCardProjectAvgAggregate } from './review-card-project-avg-aggregate.output';
import { ReviewCardProjectSumAggregate } from './review-card-project-sum-aggregate.output';
import { ReviewCardProjectMinAggregate } from './review-card-project-min-aggregate.output';
import { ReviewCardProjectMaxAggregate } from './review-card-project-max-aggregate.output';

@ObjectType()
export class ReviewCardProjectGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    businessId!: number;

    @Field(() => Int, {nullable:false})
    templateId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => ReviewCardProjectStatus, {nullable:false})
    status!: keyof typeof ReviewCardProjectStatus;

    @Field(() => ReviewCardLinkMode, {nullable:false})
    reviewLinkMode!: keyof typeof ReviewCardLinkMode;

    @Field(() => String, {nullable:true})
    googleReviewUrlFinal?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    designJson?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    assetsJson?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ReviewCardProjectCountAggregate, {nullable:true})
    _count?: ReviewCardProjectCountAggregate;

    @Field(() => ReviewCardProjectAvgAggregate, {nullable:true})
    _avg?: ReviewCardProjectAvgAggregate;

    @Field(() => ReviewCardProjectSumAggregate, {nullable:true})
    _sum?: ReviewCardProjectSumAggregate;

    @Field(() => ReviewCardProjectMinAggregate, {nullable:true})
    _min?: ReviewCardProjectMinAggregate;

    @Field(() => ReviewCardProjectMaxAggregate, {nullable:true})
    _max?: ReviewCardProjectMaxAggregate;
}
