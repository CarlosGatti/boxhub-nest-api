import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemStateWhereUniqueInput } from './feed-item-state-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemStateUpdateWithoutUserInput } from './feed-item-state-update-without-user.input';
import { FeedItemStateCreateWithoutUserInput } from './feed-item-state-create-without-user.input';

@InputType()
export class FeedItemStateUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => FeedItemStateWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemStateWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>;

    @Field(() => FeedItemStateUpdateWithoutUserInput, {nullable:false})
    @Type(() => FeedItemStateUpdateWithoutUserInput)
    update!: FeedItemStateUpdateWithoutUserInput;

    @Field(() => FeedItemStateCreateWithoutUserInput, {nullable:false})
    @Type(() => FeedItemStateCreateWithoutUserInput)
    create!: FeedItemStateCreateWithoutUserInput;
}
