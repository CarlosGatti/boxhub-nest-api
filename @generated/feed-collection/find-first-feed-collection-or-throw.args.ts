import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedCollectionWhereInput } from './feed-collection-where.input';
import { Type } from 'class-transformer';
import { FeedCollectionOrderByWithRelationInput } from './feed-collection-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedCollectionWhereUniqueInput } from './feed-collection-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedCollectionScalarFieldEnum } from './feed-collection-scalar-field.enum';

@ArgsType()
export class FindFirstFeedCollectionOrThrowArgs {

    @Field(() => FeedCollectionWhereInput, {nullable:true})
    @Type(() => FeedCollectionWhereInput)
    where?: FeedCollectionWhereInput;

    @Field(() => [FeedCollectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedCollectionOrderByWithRelationInput>;

    @Field(() => FeedCollectionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FeedCollectionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FeedCollectionScalarFieldEnum>;
}
