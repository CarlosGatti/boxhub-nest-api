import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventCreateWithoutUserInput } from './feed-event-create-without-user.input';
import { Type } from 'class-transformer';
import { FeedEventCreateOrConnectWithoutUserInput } from './feed-event-create-or-connect-without-user.input';
import { FeedEventCreateManyUserInputEnvelope } from './feed-event-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';

@InputType()
export class FeedEventCreateNestedManyWithoutUserInput {

    @Field(() => [FeedEventCreateWithoutUserInput], {nullable:true})
    @Type(() => FeedEventCreateWithoutUserInput)
    create?: Array<FeedEventCreateWithoutUserInput>;

    @Field(() => [FeedEventCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FeedEventCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FeedEventCreateOrConnectWithoutUserInput>;

    @Field(() => FeedEventCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FeedEventCreateManyUserInputEnvelope)
    createMany?: FeedEventCreateManyUserInputEnvelope;

    @Field(() => [FeedEventWhereUniqueInput], {nullable:true})
    @Type(() => FeedEventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>>;
}
