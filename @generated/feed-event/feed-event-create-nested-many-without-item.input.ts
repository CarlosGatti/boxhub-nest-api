import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventCreateWithoutItemInput } from './feed-event-create-without-item.input';
import { Type } from 'class-transformer';
import { FeedEventCreateOrConnectWithoutItemInput } from './feed-event-create-or-connect-without-item.input';
import { FeedEventCreateManyItemInputEnvelope } from './feed-event-create-many-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';

@InputType()
export class FeedEventCreateNestedManyWithoutItemInput {

    @Field(() => [FeedEventCreateWithoutItemInput], {nullable:true})
    @Type(() => FeedEventCreateWithoutItemInput)
    create?: Array<FeedEventCreateWithoutItemInput>;

    @Field(() => [FeedEventCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => FeedEventCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<FeedEventCreateOrConnectWithoutItemInput>;

    @Field(() => FeedEventCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => FeedEventCreateManyItemInputEnvelope)
    createMany?: FeedEventCreateManyItemInputEnvelope;

    @Field(() => [FeedEventWhereUniqueInput], {nullable:true})
    @Type(() => FeedEventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>>;
}
