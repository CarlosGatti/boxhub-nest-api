import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventCreateWithoutSourceInput } from './feed-event-create-without-source.input';
import { Type } from 'class-transformer';
import { FeedEventCreateOrConnectWithoutSourceInput } from './feed-event-create-or-connect-without-source.input';
import { FeedEventCreateManySourceInputEnvelope } from './feed-event-create-many-source-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';

@InputType()
export class FeedEventCreateNestedManyWithoutSourceInput {

    @Field(() => [FeedEventCreateWithoutSourceInput], {nullable:true})
    @Type(() => FeedEventCreateWithoutSourceInput)
    create?: Array<FeedEventCreateWithoutSourceInput>;

    @Field(() => [FeedEventCreateOrConnectWithoutSourceInput], {nullable:true})
    @Type(() => FeedEventCreateOrConnectWithoutSourceInput)
    connectOrCreate?: Array<FeedEventCreateOrConnectWithoutSourceInput>;

    @Field(() => FeedEventCreateManySourceInputEnvelope, {nullable:true})
    @Type(() => FeedEventCreateManySourceInputEnvelope)
    createMany?: FeedEventCreateManySourceInputEnvelope;

    @Field(() => [FeedEventWhereUniqueInput], {nullable:true})
    @Type(() => FeedEventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>>;
}
