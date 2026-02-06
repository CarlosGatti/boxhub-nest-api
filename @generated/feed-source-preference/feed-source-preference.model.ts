import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { FeedSource } from '../feed-source/feed-source.model';

@ObjectType()
export class FeedSourcePreference {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    notifyOnNew!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isMuted!: boolean;

    @Field(() => Date, {nullable:true})
    mutedUntil!: Date | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    consecutiveSkips!: number;

    @Field(() => Date, {nullable:true})
    lastInteractedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => FeedSource, {nullable:false})
    source?: FeedSource;
}
