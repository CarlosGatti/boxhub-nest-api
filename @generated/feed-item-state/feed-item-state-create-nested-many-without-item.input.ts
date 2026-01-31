import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemStateCreateWithoutItemInput } from './feed-item-state-create-without-item.input';
import { Type } from 'class-transformer';
import { FeedItemStateCreateOrConnectWithoutItemInput } from './feed-item-state-create-or-connect-without-item.input';
import { FeedItemStateCreateManyItemInputEnvelope } from './feed-item-state-create-many-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedItemStateWhereUniqueInput } from './feed-item-state-where-unique.input';

@InputType()
export class FeedItemStateCreateNestedManyWithoutItemInput {

    @Field(() => [FeedItemStateCreateWithoutItemInput], {nullable:true})
    @Type(() => FeedItemStateCreateWithoutItemInput)
    create?: Array<FeedItemStateCreateWithoutItemInput>;

    @Field(() => [FeedItemStateCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => FeedItemStateCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<FeedItemStateCreateOrConnectWithoutItemInput>;

    @Field(() => FeedItemStateCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => FeedItemStateCreateManyItemInputEnvelope)
    createMany?: FeedItemStateCreateManyItemInputEnvelope;

    @Field(() => [FeedItemStateWhereUniqueInput], {nullable:true})
    @Type(() => FeedItemStateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>>;
}
