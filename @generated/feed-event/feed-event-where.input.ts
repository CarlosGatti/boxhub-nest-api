import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumFeedEventActionFilter } from '../prisma/enum-feed-event-action-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { FeedItemRelationFilter } from '../feed-item/feed-item-relation-filter.input';
import { FeedSourceRelationFilter } from '../feed-source/feed-source-relation-filter.input';

@InputType()
export class FeedEventWhereInput {

    @Field(() => [FeedEventWhereInput], {nullable:true})
    AND?: Array<FeedEventWhereInput>;

    @Field(() => [FeedEventWhereInput], {nullable:true})
    OR?: Array<FeedEventWhereInput>;

    @Field(() => [FeedEventWhereInput], {nullable:true})
    NOT?: Array<FeedEventWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    itemId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    sourceId?: IntFilter;

    @Field(() => EnumFeedEventActionFilter, {nullable:true})
    action?: EnumFeedEventActionFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => FeedItemRelationFilter, {nullable:true})
    item?: FeedItemRelationFilter;

    @Field(() => FeedSourceRelationFilter, {nullable:true})
    source?: FeedSourceRelationFilter;
}
