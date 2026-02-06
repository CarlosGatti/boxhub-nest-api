import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedEventAction } from '../prisma/feed-event-action.enum';
import { User } from '../user/user.model';
import { FeedItem } from '../feed-item/feed-item.model';
import { FeedSource } from '../feed-source/feed-source.model';

@ObjectType()
export class FeedEvent {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    itemId!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => FeedEventAction, {nullable:false})
    action!: keyof typeof FeedEventAction;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => FeedItem, {nullable:false})
    item?: FeedItem;

    @Field(() => FeedSource, {nullable:false})
    source?: FeedSource;
}
