import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumFeedItemReadStatusFilter } from '../prisma/enum-feed-item-read-status-filter.input';
import { EnumFeedItemSaveStatusFilter } from '../prisma/enum-feed-item-save-status-filter.input';
import { EnumFeedItemVisibilityFilter } from '../prisma/enum-feed-item-visibility-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumFeedItemLastActionNullableFilter } from '../prisma/enum-feed-item-last-action-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { FeedItemRelationFilter } from '../feed-item/feed-item-relation-filter.input';

@InputType()
export class FeedItemStateWhereInput {

    @Field(() => [FeedItemStateWhereInput], {nullable:true})
    AND?: Array<FeedItemStateWhereInput>;

    @Field(() => [FeedItemStateWhereInput], {nullable:true})
    OR?: Array<FeedItemStateWhereInput>;

    @Field(() => [FeedItemStateWhereInput], {nullable:true})
    NOT?: Array<FeedItemStateWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    itemId?: IntFilter;

    @Field(() => EnumFeedItemReadStatusFilter, {nullable:true})
    readStatus?: EnumFeedItemReadStatusFilter;

    @Field(() => EnumFeedItemSaveStatusFilter, {nullable:true})
    saveStatus?: EnumFeedItemSaveStatusFilter;

    @Field(() => EnumFeedItemVisibilityFilter, {nullable:true})
    visibility?: EnumFeedItemVisibilityFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    openedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    skippedAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    skipCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    actionCount?: IntFilter;

    @Field(() => EnumFeedItemLastActionNullableFilter, {nullable:true})
    lastAction?: EnumFeedItemLastActionNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    readAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    savedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    hiddenAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => FeedItemRelationFilter, {nullable:true})
    item?: FeedItemRelationFilter;
}
