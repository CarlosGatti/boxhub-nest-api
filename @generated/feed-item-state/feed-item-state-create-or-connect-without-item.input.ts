import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemStateWhereUniqueInput } from './feed-item-state-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemStateCreateWithoutItemInput } from './feed-item-state-create-without-item.input';

@InputType()
export class FeedItemStateCreateOrConnectWithoutItemInput {

    @Field(() => FeedItemStateWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemStateWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>;

    @Field(() => FeedItemStateCreateWithoutItemInput, {nullable:false})
    @Type(() => FeedItemStateCreateWithoutItemInput)
    create!: FeedItemStateCreateWithoutItemInput;
}
