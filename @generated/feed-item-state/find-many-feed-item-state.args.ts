import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemStateWhereInput } from './feed-item-state-where.input';
import { Type } from 'class-transformer';
import { FeedItemStateOrderByWithRelationInput } from './feed-item-state-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedItemStateWhereUniqueInput } from './feed-item-state-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedItemStateScalarFieldEnum } from './feed-item-state-scalar-field.enum';

@ArgsType()
export class FindManyFeedItemStateArgs {

    @Field(() => FeedItemStateWhereInput, {nullable:true})
    @Type(() => FeedItemStateWhereInput)
    where?: FeedItemStateWhereInput;

    @Field(() => [FeedItemStateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedItemStateOrderByWithRelationInput>;

    @Field(() => FeedItemStateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FeedItemStateScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FeedItemStateScalarFieldEnum>;
}
