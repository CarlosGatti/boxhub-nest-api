import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemWhereInput } from './feed-item-where.input';
import { Type } from 'class-transformer';
import { FeedItemOrderByWithRelationInput } from './feed-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedItemScalarFieldEnum } from './feed-item-scalar-field.enum';

@ArgsType()
export class FindFirstFeedItemOrThrowArgs {

    @Field(() => FeedItemWhereInput, {nullable:true})
    @Type(() => FeedItemWhereInput)
    where?: FeedItemWhereInput;

    @Field(() => [FeedItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedItemOrderByWithRelationInput>;

    @Field(() => FeedItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FeedItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FeedItemScalarFieldEnum>;
}
