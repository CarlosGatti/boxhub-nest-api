import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PublicationCommentCountAggregate } from './publication-comment-count-aggregate.output';
import { PublicationCommentAvgAggregate } from './publication-comment-avg-aggregate.output';
import { PublicationCommentSumAggregate } from './publication-comment-sum-aggregate.output';
import { PublicationCommentMinAggregate } from './publication-comment-min-aggregate.output';
import { PublicationCommentMaxAggregate } from './publication-comment-max-aggregate.output';

@ObjectType()
export class PublicationCommentGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    publicationId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PublicationCommentCountAggregate, {nullable:true})
    _count?: PublicationCommentCountAggregate;

    @Field(() => PublicationCommentAvgAggregate, {nullable:true})
    _avg?: PublicationCommentAvgAggregate;

    @Field(() => PublicationCommentSumAggregate, {nullable:true})
    _sum?: PublicationCommentSumAggregate;

    @Field(() => PublicationCommentMinAggregate, {nullable:true})
    _min?: PublicationCommentMinAggregate;

    @Field(() => PublicationCommentMaxAggregate, {nullable:true})
    _max?: PublicationCommentMaxAggregate;
}
