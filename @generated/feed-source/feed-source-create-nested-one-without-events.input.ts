import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceCreateWithoutEventsInput } from './feed-source-create-without-events.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateOrConnectWithoutEventsInput } from './feed-source-create-or-connect-without-events.input';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';

@InputType()
export class FeedSourceCreateNestedOneWithoutEventsInput {

    @Field(() => FeedSourceCreateWithoutEventsInput, {nullable:true})
    @Type(() => FeedSourceCreateWithoutEventsInput)
    create?: FeedSourceCreateWithoutEventsInput;

    @Field(() => FeedSourceCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => FeedSourceCreateOrConnectWithoutEventsInput)
    connectOrCreate?: FeedSourceCreateOrConnectWithoutEventsInput;

    @Field(() => FeedSourceWhereUniqueInput, {nullable:true})
    @Type(() => FeedSourceWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;
}
