import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceNudgeCreateWithoutUserInput } from './feed-source-nudge-create-without-user.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeCreateOrConnectWithoutUserInput } from './feed-source-nudge-create-or-connect-without-user.input';
import { FeedSourceNudgeCreateManyUserInputEnvelope } from './feed-source-nudge-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedSourceNudgeWhereUniqueInput } from './feed-source-nudge-where-unique.input';

@InputType()
export class FeedSourceNudgeUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [FeedSourceNudgeCreateWithoutUserInput], {nullable:true})
    @Type(() => FeedSourceNudgeCreateWithoutUserInput)
    create?: Array<FeedSourceNudgeCreateWithoutUserInput>;

    @Field(() => [FeedSourceNudgeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FeedSourceNudgeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FeedSourceNudgeCreateOrConnectWithoutUserInput>;

    @Field(() => FeedSourceNudgeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FeedSourceNudgeCreateManyUserInputEnvelope)
    createMany?: FeedSourceNudgeCreateManyUserInputEnvelope;

    @Field(() => [FeedSourceNudgeWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourceNudgeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>>;
}
