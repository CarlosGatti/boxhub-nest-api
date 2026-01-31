import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemStateWhereUniqueInput } from './feed-item-state-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemStateUpdateWithoutItemInput } from './feed-item-state-update-without-item.input';

@InputType()
export class FeedItemStateUpdateWithWhereUniqueWithoutItemInput {

    @Field(() => FeedItemStateWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemStateWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>;

    @Field(() => FeedItemStateUpdateWithoutItemInput, {nullable:false})
    @Type(() => FeedItemStateUpdateWithoutItemInput)
    data!: FeedItemStateUpdateWithoutItemInput;
}
