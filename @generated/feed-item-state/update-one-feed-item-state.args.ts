import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemStateUpdateInput } from './feed-item-state-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FeedItemStateWhereUniqueInput } from './feed-item-state-where-unique.input';

@ArgsType()
export class UpdateOneFeedItemStateArgs {

    @Field(() => FeedItemStateUpdateInput, {nullable:false})
    @Type(() => FeedItemStateUpdateInput)
    data!: FeedItemStateUpdateInput;

    @Field(() => FeedItemStateWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemStateWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>;
}
