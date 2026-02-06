import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumFeedEventActionFilter } from '../prisma/enum-feed-event-action-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FeedEventScalarWhereInput {

    @Field(() => [FeedEventScalarWhereInput], {nullable:true})
    AND?: Array<FeedEventScalarWhereInput>;

    @Field(() => [FeedEventScalarWhereInput], {nullable:true})
    OR?: Array<FeedEventScalarWhereInput>;

    @Field(() => [FeedEventScalarWhereInput], {nullable:true})
    NOT?: Array<FeedEventScalarWhereInput>;

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
}
