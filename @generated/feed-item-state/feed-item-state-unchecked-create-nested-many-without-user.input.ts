import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemStateCreateWithoutUserInput } from './feed-item-state-create-without-user.input';
import { Type } from 'class-transformer';
import { FeedItemStateCreateOrConnectWithoutUserInput } from './feed-item-state-create-or-connect-without-user.input';
import { FeedItemStateCreateManyUserInputEnvelope } from './feed-item-state-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedItemStateWhereUniqueInput } from './feed-item-state-where-unique.input';

@InputType()
export class FeedItemStateUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [FeedItemStateCreateWithoutUserInput], {nullable:true})
    @Type(() => FeedItemStateCreateWithoutUserInput)
    create?: Array<FeedItemStateCreateWithoutUserInput>;

    @Field(() => [FeedItemStateCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FeedItemStateCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FeedItemStateCreateOrConnectWithoutUserInput>;

    @Field(() => FeedItemStateCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FeedItemStateCreateManyUserInputEnvelope)
    createMany?: FeedItemStateCreateManyUserInputEnvelope;

    @Field(() => [FeedItemStateWhereUniqueInput], {nullable:true})
    @Type(() => FeedItemStateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>>;
}
