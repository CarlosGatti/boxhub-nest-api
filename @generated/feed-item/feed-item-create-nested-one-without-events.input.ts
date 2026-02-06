import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemCreateWithoutEventsInput } from './feed-item-create-without-events.input';
import { Type } from 'class-transformer';
import { FeedItemCreateOrConnectWithoutEventsInput } from './feed-item-create-or-connect-without-events.input';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';

@InputType()
export class FeedItemCreateNestedOneWithoutEventsInput {

    @Field(() => FeedItemCreateWithoutEventsInput, {nullable:true})
    @Type(() => FeedItemCreateWithoutEventsInput)
    create?: FeedItemCreateWithoutEventsInput;

    @Field(() => FeedItemCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => FeedItemCreateOrConnectWithoutEventsInput)
    connectOrCreate?: FeedItemCreateOrConnectWithoutEventsInput;

    @Field(() => FeedItemWhereUniqueInput, {nullable:true})
    @Type(() => FeedItemWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;
}
