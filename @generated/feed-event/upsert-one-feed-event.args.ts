import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';
import { Type } from 'class-transformer';
import { FeedEventCreateInput } from './feed-event-create.input';
import { FeedEventUpdateInput } from './feed-event-update.input';

@ArgsType()
export class UpsertOneFeedEventArgs {

    @Field(() => FeedEventWhereUniqueInput, {nullable:false})
    @Type(() => FeedEventWhereUniqueInput)
    where!: Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>;

    @Field(() => FeedEventCreateInput, {nullable:false})
    @Type(() => FeedEventCreateInput)
    create!: FeedEventCreateInput;

    @Field(() => FeedEventUpdateInput, {nullable:false})
    @Type(() => FeedEventUpdateInput)
    update!: FeedEventUpdateInput;
}
