import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemReadStatus } from '../prisma/feed-item-read-status.enum';
import { FeedItemSaveStatus } from '../prisma/feed-item-save-status.enum';
import { FeedItemVisibility } from '../prisma/feed-item-visibility.enum';
import { Int } from '@nestjs/graphql';
import { FeedItemLastAction } from '../prisma/feed-item-last-action.enum';
import { FeedItemCreateNestedOneWithoutStatesInput } from '../feed-item/feed-item-create-nested-one-without-states.input';

@InputType()
export class FeedItemStateCreateWithoutUserInput {

    @Field(() => FeedItemReadStatus, {nullable:true})
    readStatus?: keyof typeof FeedItemReadStatus;

    @Field(() => FeedItemSaveStatus, {nullable:true})
    saveStatus?: keyof typeof FeedItemSaveStatus;

    @Field(() => FeedItemVisibility, {nullable:true})
    visibility?: keyof typeof FeedItemVisibility;

    @Field(() => Date, {nullable:true})
    openedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    skippedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    skipCount?: number;

    @Field(() => Int, {nullable:true})
    actionCount?: number;

    @Field(() => FeedItemLastAction, {nullable:true})
    lastAction?: keyof typeof FeedItemLastAction;

    @Field(() => Date, {nullable:true})
    readAt?: Date | string;

    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    hiddenAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FeedItemCreateNestedOneWithoutStatesInput, {nullable:false})
    item!: FeedItemCreateNestedOneWithoutStatesInput;
}
