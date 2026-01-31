import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedSourceType } from '../prisma/feed-source-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedCollection } from '../feed-collection/feed-collection.model';
import { FeedItem } from '../feed-item/feed-item.model';
import { FeedSourceCount } from './feed-source-count.output';

@ObjectType()
export class FeedSource {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    collectionId!: number;

    @Field(() => FeedSourceType, {nullable:false})
    type!: keyof typeof FeedSourceType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => Int, {nullable:true})
    fetchEveryMin!: number | null;

    @Field(() => Date, {nullable:true})
    lastFetchedAt!: Date | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    failureCount!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => FeedCollection, {nullable:false})
    collection?: FeedCollection;

    @Field(() => [FeedItem], {nullable:true})
    items?: Array<FeedItem>;

    @Field(() => FeedSourceCount, {nullable:false})
    _count?: FeedSourceCount;
}
