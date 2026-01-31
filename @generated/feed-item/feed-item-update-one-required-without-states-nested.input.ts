import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemCreateWithoutStatesInput } from './feed-item-create-without-states.input';
import { Type } from 'class-transformer';
import { FeedItemCreateOrConnectWithoutStatesInput } from './feed-item-create-or-connect-without-states.input';
import { FeedItemUpsertWithoutStatesInput } from './feed-item-upsert-without-states.input';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { FeedItemUpdateToOneWithWhereWithoutStatesInput } from './feed-item-update-to-one-with-where-without-states.input';

@InputType()
export class FeedItemUpdateOneRequiredWithoutStatesNestedInput {

    @Field(() => FeedItemCreateWithoutStatesInput, {nullable:true})
    @Type(() => FeedItemCreateWithoutStatesInput)
    create?: FeedItemCreateWithoutStatesInput;

    @Field(() => FeedItemCreateOrConnectWithoutStatesInput, {nullable:true})
    @Type(() => FeedItemCreateOrConnectWithoutStatesInput)
    connectOrCreate?: FeedItemCreateOrConnectWithoutStatesInput;

    @Field(() => FeedItemUpsertWithoutStatesInput, {nullable:true})
    @Type(() => FeedItemUpsertWithoutStatesInput)
    upsert?: FeedItemUpsertWithoutStatesInput;

    @Field(() => FeedItemWhereUniqueInput, {nullable:true})
    @Type(() => FeedItemWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;

    @Field(() => FeedItemUpdateToOneWithWhereWithoutStatesInput, {nullable:true})
    @Type(() => FeedItemUpdateToOneWithWhereWithoutStatesInput)
    update?: FeedItemUpdateToOneWithWhereWithoutStatesInput;
}
