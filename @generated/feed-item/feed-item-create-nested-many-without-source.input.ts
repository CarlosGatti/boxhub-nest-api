import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemCreateWithoutSourceInput } from './feed-item-create-without-source.input';
import { Type } from 'class-transformer';
import { FeedItemCreateOrConnectWithoutSourceInput } from './feed-item-create-or-connect-without-source.input';
import { FeedItemCreateManySourceInputEnvelope } from './feed-item-create-many-source-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';

@InputType()
export class FeedItemCreateNestedManyWithoutSourceInput {

    @Field(() => [FeedItemCreateWithoutSourceInput], {nullable:true})
    @Type(() => FeedItemCreateWithoutSourceInput)
    create?: Array<FeedItemCreateWithoutSourceInput>;

    @Field(() => [FeedItemCreateOrConnectWithoutSourceInput], {nullable:true})
    @Type(() => FeedItemCreateOrConnectWithoutSourceInput)
    connectOrCreate?: Array<FeedItemCreateOrConnectWithoutSourceInput>;

    @Field(() => FeedItemCreateManySourceInputEnvelope, {nullable:true})
    @Type(() => FeedItemCreateManySourceInputEnvelope)
    createMany?: FeedItemCreateManySourceInputEnvelope;

    @Field(() => [FeedItemWhereUniqueInput], {nullable:true})
    @Type(() => FeedItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>>;
}
