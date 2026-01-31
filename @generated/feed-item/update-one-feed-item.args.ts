import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemUpdateInput } from './feed-item-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';

@ArgsType()
export class UpdateOneFeedItemArgs {

    @Field(() => FeedItemUpdateInput, {nullable:false})
    @Type(() => FeedItemUpdateInput)
    data!: FeedItemUpdateInput;

    @Field(() => FeedItemWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;
}
