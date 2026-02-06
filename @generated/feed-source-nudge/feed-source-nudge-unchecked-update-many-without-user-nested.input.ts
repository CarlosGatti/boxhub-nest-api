import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceNudgeCreateWithoutUserInput } from './feed-source-nudge-create-without-user.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeCreateOrConnectWithoutUserInput } from './feed-source-nudge-create-or-connect-without-user.input';
import { FeedSourceNudgeUpsertWithWhereUniqueWithoutUserInput } from './feed-source-nudge-upsert-with-where-unique-without-user.input';
import { FeedSourceNudgeCreateManyUserInputEnvelope } from './feed-source-nudge-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedSourceNudgeWhereUniqueInput } from './feed-source-nudge-where-unique.input';
import { FeedSourceNudgeUpdateWithWhereUniqueWithoutUserInput } from './feed-source-nudge-update-with-where-unique-without-user.input';
import { FeedSourceNudgeUpdateManyWithWhereWithoutUserInput } from './feed-source-nudge-update-many-with-where-without-user.input';
import { FeedSourceNudgeScalarWhereInput } from './feed-source-nudge-scalar-where.input';

@InputType()
export class FeedSourceNudgeUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [FeedSourceNudgeCreateWithoutUserInput], {nullable:true})
    @Type(() => FeedSourceNudgeCreateWithoutUserInput)
    create?: Array<FeedSourceNudgeCreateWithoutUserInput>;

    @Field(() => [FeedSourceNudgeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FeedSourceNudgeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FeedSourceNudgeCreateOrConnectWithoutUserInput>;

    @Field(() => [FeedSourceNudgeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FeedSourceNudgeUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<FeedSourceNudgeUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => FeedSourceNudgeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FeedSourceNudgeCreateManyUserInputEnvelope)
    createMany?: FeedSourceNudgeCreateManyUserInputEnvelope;

    @Field(() => [FeedSourceNudgeWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourceNudgeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>>;

    @Field(() => [FeedSourceNudgeWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourceNudgeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>>;

    @Field(() => [FeedSourceNudgeWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourceNudgeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>>;

    @Field(() => [FeedSourceNudgeWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourceNudgeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>>;

    @Field(() => [FeedSourceNudgeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FeedSourceNudgeUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<FeedSourceNudgeUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [FeedSourceNudgeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => FeedSourceNudgeUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<FeedSourceNudgeUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [FeedSourceNudgeScalarWhereInput], {nullable:true})
    @Type(() => FeedSourceNudgeScalarWhereInput)
    deleteMany?: Array<FeedSourceNudgeScalarWhereInput>;
}
