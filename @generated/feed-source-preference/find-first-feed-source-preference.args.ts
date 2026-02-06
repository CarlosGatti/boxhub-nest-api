import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourcePreferenceWhereInput } from './feed-source-preference-where.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceOrderByWithRelationInput } from './feed-source-preference-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedSourcePreferenceWhereUniqueInput } from './feed-source-preference-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedSourcePreferenceScalarFieldEnum } from './feed-source-preference-scalar-field.enum';

@ArgsType()
export class FindFirstFeedSourcePreferenceArgs {

    @Field(() => FeedSourcePreferenceWhereInput, {nullable:true})
    @Type(() => FeedSourcePreferenceWhereInput)
    where?: FeedSourcePreferenceWhereInput;

    @Field(() => [FeedSourcePreferenceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedSourcePreferenceOrderByWithRelationInput>;

    @Field(() => FeedSourcePreferenceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FeedSourcePreferenceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FeedSourcePreferenceScalarFieldEnum>;
}
