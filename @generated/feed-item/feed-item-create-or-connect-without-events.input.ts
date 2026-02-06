import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemCreateWithoutEventsInput } from './feed-item-create-without-events.input';

@InputType()
export class FeedItemCreateOrConnectWithoutEventsInput {

    @Field(() => FeedItemWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;

    @Field(() => FeedItemCreateWithoutEventsInput, {nullable:false})
    @Type(() => FeedItemCreateWithoutEventsInput)
    create!: FeedItemCreateWithoutEventsInput;
}
