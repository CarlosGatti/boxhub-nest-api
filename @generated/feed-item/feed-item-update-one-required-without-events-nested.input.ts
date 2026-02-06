import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemCreateWithoutEventsInput } from './feed-item-create-without-events.input';
import { Type } from 'class-transformer';
import { FeedItemCreateOrConnectWithoutEventsInput } from './feed-item-create-or-connect-without-events.input';
import { FeedItemUpsertWithoutEventsInput } from './feed-item-upsert-without-events.input';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { FeedItemUpdateToOneWithWhereWithoutEventsInput } from './feed-item-update-to-one-with-where-without-events.input';

@InputType()
export class FeedItemUpdateOneRequiredWithoutEventsNestedInput {

    @Field(() => FeedItemCreateWithoutEventsInput, {nullable:true})
    @Type(() => FeedItemCreateWithoutEventsInput)
    create?: FeedItemCreateWithoutEventsInput;

    @Field(() => FeedItemCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => FeedItemCreateOrConnectWithoutEventsInput)
    connectOrCreate?: FeedItemCreateOrConnectWithoutEventsInput;

    @Field(() => FeedItemUpsertWithoutEventsInput, {nullable:true})
    @Type(() => FeedItemUpsertWithoutEventsInput)
    upsert?: FeedItemUpsertWithoutEventsInput;

    @Field(() => FeedItemWhereUniqueInput, {nullable:true})
    @Type(() => FeedItemWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;

    @Field(() => FeedItemUpdateToOneWithWhereWithoutEventsInput, {nullable:true})
    @Type(() => FeedItemUpdateToOneWithWhereWithoutEventsInput)
    update?: FeedItemUpdateToOneWithWhereWithoutEventsInput;
}
