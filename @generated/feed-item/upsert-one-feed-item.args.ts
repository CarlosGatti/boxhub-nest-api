import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemCreateInput } from './feed-item-create.input';
import { FeedItemUpdateInput } from './feed-item-update.input';

@ArgsType()
export class UpsertOneFeedItemArgs {

    @Field(() => FeedItemWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;

    @Field(() => FeedItemCreateInput, {nullable:false})
    @Type(() => FeedItemCreateInput)
    create!: FeedItemCreateInput;

    @Field(() => FeedItemUpdateInput, {nullable:false})
    @Type(() => FeedItemUpdateInput)
    update!: FeedItemUpdateInput;
}
