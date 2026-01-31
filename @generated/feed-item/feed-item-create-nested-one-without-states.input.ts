import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemCreateWithoutStatesInput } from './feed-item-create-without-states.input';
import { Type } from 'class-transformer';
import { FeedItemCreateOrConnectWithoutStatesInput } from './feed-item-create-or-connect-without-states.input';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';

@InputType()
export class FeedItemCreateNestedOneWithoutStatesInput {

    @Field(() => FeedItemCreateWithoutStatesInput, {nullable:true})
    @Type(() => FeedItemCreateWithoutStatesInput)
    create?: FeedItemCreateWithoutStatesInput;

    @Field(() => FeedItemCreateOrConnectWithoutStatesInput, {nullable:true})
    @Type(() => FeedItemCreateOrConnectWithoutStatesInput)
    connectOrCreate?: FeedItemCreateOrConnectWithoutStatesInput;

    @Field(() => FeedItemWhereUniqueInput, {nullable:true})
    @Type(() => FeedItemWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;
}
