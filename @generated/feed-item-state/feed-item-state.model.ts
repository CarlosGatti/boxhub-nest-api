import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedItemReadStatus } from '../prisma/feed-item-read-status.enum';
import { FeedItemSaveStatus } from '../prisma/feed-item-save-status.enum';
import { FeedItemVisibility } from '../prisma/feed-item-visibility.enum';
import { User } from '../user/user.model';
import { FeedItem } from '../feed-item/feed-item.model';

@ObjectType()
export class FeedItemState {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    itemId!: number;

    @Field(() => FeedItemReadStatus, {nullable:false,defaultValue:'UNREAD'})
    readStatus!: keyof typeof FeedItemReadStatus;

    @Field(() => FeedItemSaveStatus, {nullable:false,defaultValue:'NONE'})
    saveStatus!: keyof typeof FeedItemSaveStatus;

    @Field(() => FeedItemVisibility, {nullable:false,defaultValue:'VISIBLE'})
    visibility!: keyof typeof FeedItemVisibility;

    @Field(() => Date, {nullable:true})
    readAt!: Date | null;

    @Field(() => Date, {nullable:true})
    savedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    hiddenAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => FeedItem, {nullable:false})
    item?: FeedItem;
}
