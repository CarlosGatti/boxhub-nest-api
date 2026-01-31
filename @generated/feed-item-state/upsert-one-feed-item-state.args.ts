import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemStateWhereUniqueInput } from './feed-item-state-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemStateCreateInput } from './feed-item-state-create.input';
import { FeedItemStateUpdateInput } from './feed-item-state-update.input';

@ArgsType()
export class UpsertOneFeedItemStateArgs {

    @Field(() => FeedItemStateWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemStateWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>;

    @Field(() => FeedItemStateCreateInput, {nullable:false})
    @Type(() => FeedItemStateCreateInput)
    create!: FeedItemStateCreateInput;

    @Field(() => FeedItemStateUpdateInput, {nullable:false})
    @Type(() => FeedItemStateUpdateInput)
    update!: FeedItemStateUpdateInput;
}
