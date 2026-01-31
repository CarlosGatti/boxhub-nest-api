import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceCreateWithoutItemsInput } from './feed-source-create-without-items.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateOrConnectWithoutItemsInput } from './feed-source-create-or-connect-without-items.input';
import { FeedSourceUpsertWithoutItemsInput } from './feed-source-upsert-without-items.input';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { FeedSourceUpdateToOneWithWhereWithoutItemsInput } from './feed-source-update-to-one-with-where-without-items.input';

@InputType()
export class FeedSourceUpdateOneRequiredWithoutItemsNestedInput {

    @Field(() => FeedSourceCreateWithoutItemsInput, {nullable:true})
    @Type(() => FeedSourceCreateWithoutItemsInput)
    create?: FeedSourceCreateWithoutItemsInput;

    @Field(() => FeedSourceCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => FeedSourceCreateOrConnectWithoutItemsInput)
    connectOrCreate?: FeedSourceCreateOrConnectWithoutItemsInput;

    @Field(() => FeedSourceUpsertWithoutItemsInput, {nullable:true})
    @Type(() => FeedSourceUpsertWithoutItemsInput)
    upsert?: FeedSourceUpsertWithoutItemsInput;

    @Field(() => FeedSourceWhereUniqueInput, {nullable:true})
    @Type(() => FeedSourceWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => FeedSourceUpdateToOneWithWhereWithoutItemsInput)
    update?: FeedSourceUpdateToOneWithWhereWithoutItemsInput;
}
