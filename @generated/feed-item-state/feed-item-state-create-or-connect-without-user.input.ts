import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemStateWhereUniqueInput } from './feed-item-state-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemStateCreateWithoutUserInput } from './feed-item-state-create-without-user.input';

@InputType()
export class FeedItemStateCreateOrConnectWithoutUserInput {

    @Field(() => FeedItemStateWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemStateWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>;

    @Field(() => FeedItemStateCreateWithoutUserInput, {nullable:false})
    @Type(() => FeedItemStateCreateWithoutUserInput)
    create!: FeedItemStateCreateWithoutUserInput;
}
