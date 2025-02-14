import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PublicationLikeCountAggregate } from './publication-like-count-aggregate.output';
import { PublicationLikeAvgAggregate } from './publication-like-avg-aggregate.output';
import { PublicationLikeSumAggregate } from './publication-like-sum-aggregate.output';
import { PublicationLikeMinAggregate } from './publication-like-min-aggregate.output';
import { PublicationLikeMaxAggregate } from './publication-like-max-aggregate.output';

@ObjectType()
export class AggregatePublicationLike {

    @Field(() => PublicationLikeCountAggregate, {nullable:true})
    _count?: PublicationLikeCountAggregate;

    @Field(() => PublicationLikeAvgAggregate, {nullable:true})
    _avg?: PublicationLikeAvgAggregate;

    @Field(() => PublicationLikeSumAggregate, {nullable:true})
    _sum?: PublicationLikeSumAggregate;

    @Field(() => PublicationLikeMinAggregate, {nullable:true})
    _min?: PublicationLikeMinAggregate;

    @Field(() => PublicationLikeMaxAggregate, {nullable:true})
    _max?: PublicationLikeMaxAggregate;
}
