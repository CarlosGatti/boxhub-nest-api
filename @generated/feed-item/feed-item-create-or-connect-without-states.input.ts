import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemCreateWithoutStatesInput } from './feed-item-create-without-states.input';

@InputType()
export class FeedItemCreateOrConnectWithoutStatesInput {

    @Field(() => FeedItemWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;

    @Field(() => FeedItemCreateWithoutStatesInput, {nullable:false})
    @Type(() => FeedItemCreateWithoutStatesInput)
    create!: FeedItemCreateWithoutStatesInput;
}
