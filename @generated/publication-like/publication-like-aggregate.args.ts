import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationLikeWhereInput } from './publication-like-where.input';
import { Type } from 'class-transformer';
import { PublicationLikeOrderByWithRelationInput } from './publication-like-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PublicationLikeWhereUniqueInput } from './publication-like-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PublicationLikeCountAggregateInput } from './publication-like-count-aggregate.input';
import { PublicationLikeAvgAggregateInput } from './publication-like-avg-aggregate.input';
import { PublicationLikeSumAggregateInput } from './publication-like-sum-aggregate.input';
import { PublicationLikeMinAggregateInput } from './publication-like-min-aggregate.input';
import { PublicationLikeMaxAggregateInput } from './publication-like-max-aggregate.input';

@ArgsType()
export class PublicationLikeAggregateArgs {

    @Field(() => PublicationLikeWhereInput, {nullable:true})
    @Type(() => PublicationLikeWhereInput)
    where?: PublicationLikeWhereInput;

    @Field(() => [PublicationLikeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PublicationLikeOrderByWithRelationInput>;

    @Field(() => PublicationLikeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PublicationLikeCountAggregateInput, {nullable:true})
    _count?: PublicationLikeCountAggregateInput;

    @Field(() => PublicationLikeAvgAggregateInput, {nullable:true})
    _avg?: PublicationLikeAvgAggregateInput;

    @Field(() => PublicationLikeSumAggregateInput, {nullable:true})
    _sum?: PublicationLikeSumAggregateInput;

    @Field(() => PublicationLikeMinAggregateInput, {nullable:true})
    _min?: PublicationLikeMinAggregateInput;

    @Field(() => PublicationLikeMaxAggregateInput, {nullable:true})
    _max?: PublicationLikeMaxAggregateInput;
}
