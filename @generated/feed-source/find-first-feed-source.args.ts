import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceWhereInput } from './feed-source-where.input';
import { Type } from 'class-transformer';
import { FeedSourceOrderByWithRelationInput } from './feed-source-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedSourceScalarFieldEnum } from './feed-source-scalar-field.enum';

@ArgsType()
export class FindFirstFeedSourceArgs {

    @Field(() => FeedSourceWhereInput, {nullable:true})
    @Type(() => FeedSourceWhereInput)
    where?: FeedSourceWhereInput;

    @Field(() => [FeedSourceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedSourceOrderByWithRelationInput>;

    @Field(() => FeedSourceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FeedSourceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FeedSourceScalarFieldEnum>;
}
