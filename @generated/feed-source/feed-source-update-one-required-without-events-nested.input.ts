import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceCreateWithoutEventsInput } from './feed-source-create-without-events.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateOrConnectWithoutEventsInput } from './feed-source-create-or-connect-without-events.input';
import { FeedSourceUpsertWithoutEventsInput } from './feed-source-upsert-without-events.input';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { FeedSourceUpdateToOneWithWhereWithoutEventsInput } from './feed-source-update-to-one-with-where-without-events.input';

@InputType()
export class FeedSourceUpdateOneRequiredWithoutEventsNestedInput {

    @Field(() => FeedSourceCreateWithoutEventsInput, {nullable:true})
    @Type(() => FeedSourceCreateWithoutEventsInput)
    create?: FeedSourceCreateWithoutEventsInput;

    @Field(() => FeedSourceCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => FeedSourceCreateOrConnectWithoutEventsInput)
    connectOrCreate?: FeedSourceCreateOrConnectWithoutEventsInput;

    @Field(() => FeedSourceUpsertWithoutEventsInput, {nullable:true})
    @Type(() => FeedSourceUpsertWithoutEventsInput)
    upsert?: FeedSourceUpsertWithoutEventsInput;

    @Field(() => FeedSourceWhereUniqueInput, {nullable:true})
    @Type(() => FeedSourceWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceUpdateToOneWithWhereWithoutEventsInput, {nullable:true})
    @Type(() => FeedSourceUpdateToOneWithWhereWithoutEventsInput)
    update?: FeedSourceUpdateToOneWithWhereWithoutEventsInput;
}
