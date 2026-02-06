import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceNudgeCreateWithoutSourceInput } from './feed-source-nudge-create-without-source.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeCreateOrConnectWithoutSourceInput } from './feed-source-nudge-create-or-connect-without-source.input';
import { FeedSourceNudgeCreateManySourceInputEnvelope } from './feed-source-nudge-create-many-source-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedSourceNudgeWhereUniqueInput } from './feed-source-nudge-where-unique.input';

@InputType()
export class FeedSourceNudgeUncheckedCreateNestedManyWithoutSourceInput {

    @Field(() => [FeedSourceNudgeCreateWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourceNudgeCreateWithoutSourceInput)
    create?: Array<FeedSourceNudgeCreateWithoutSourceInput>;

    @Field(() => [FeedSourceNudgeCreateOrConnectWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourceNudgeCreateOrConnectWithoutSourceInput)
    connectOrCreate?: Array<FeedSourceNudgeCreateOrConnectWithoutSourceInput>;

    @Field(() => FeedSourceNudgeCreateManySourceInputEnvelope, {nullable:true})
    @Type(() => FeedSourceNudgeCreateManySourceInputEnvelope)
    createMany?: FeedSourceNudgeCreateManySourceInputEnvelope;

    @Field(() => [FeedSourceNudgeWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourceNudgeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>>;
}
