import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedEventWhereInput } from './feed-event-where.input';
import { Type } from 'class-transformer';
import { FeedEventOrderByWithRelationInput } from './feed-event-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedEventScalarFieldEnum } from './feed-event-scalar-field.enum';

@ArgsType()
export class FindFirstFeedEventArgs {

    @Field(() => FeedEventWhereInput, {nullable:true})
    @Type(() => FeedEventWhereInput)
    where?: FeedEventWhereInput;

    @Field(() => [FeedEventOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedEventOrderByWithRelationInput>;

    @Field(() => FeedEventWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FeedEventScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FeedEventScalarFieldEnum>;
}
