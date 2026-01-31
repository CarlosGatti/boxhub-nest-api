import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedProfile } from '../feed-profile/feed-profile.model';
import { FeedSource } from '../feed-source/feed-source.model';
import { FeedCollectionCount } from './feed-collection-count.output';

@ObjectType()
export class FeedCollection {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => [String], {nullable:true})
    keywords!: Array<string>;

    @Field(() => [String], {nullable:true})
    blocked!: Array<string>;

    @Field(() => [String], {nullable:true})
    preferredDomains!: Array<string>;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => FeedProfile, {nullable:false})
    profile?: FeedProfile;

    @Field(() => [FeedSource], {nullable:true})
    sources?: Array<FeedSource>;

    @Field(() => FeedCollectionCount, {nullable:false})
    _count?: FeedCollectionCount;
}
