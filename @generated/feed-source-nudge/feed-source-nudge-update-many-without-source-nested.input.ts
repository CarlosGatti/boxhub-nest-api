import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceNudgeCreateWithoutSourceInput } from './feed-source-nudge-create-without-source.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeCreateOrConnectWithoutSourceInput } from './feed-source-nudge-create-or-connect-without-source.input';
import { FeedSourceNudgeUpsertWithWhereUniqueWithoutSourceInput } from './feed-source-nudge-upsert-with-where-unique-without-source.input';
import { FeedSourceNudgeCreateManySourceInputEnvelope } from './feed-source-nudge-create-many-source-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedSourceNudgeWhereUniqueInput } from './feed-source-nudge-where-unique.input';
import { FeedSourceNudgeUpdateWithWhereUniqueWithoutSourceInput } from './feed-source-nudge-update-with-where-unique-without-source.input';
import { FeedSourceNudgeUpdateManyWithWhereWithoutSourceInput } from './feed-source-nudge-update-many-with-where-without-source.input';
import { FeedSourceNudgeScalarWhereInput } from './feed-source-nudge-scalar-where.input';

@InputType()
export class FeedSourceNudgeUpdateManyWithoutSourceNestedInput {

    @Field(() => [FeedSourceNudgeCreateWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourceNudgeCreateWithoutSourceInput)
    create?: Array<FeedSourceNudgeCreateWithoutSourceInput>;

    @Field(() => [FeedSourceNudgeCreateOrConnectWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourceNudgeCreateOrConnectWithoutSourceInput)
    connectOrCreate?: Array<FeedSourceNudgeCreateOrConnectWithoutSourceInput>;

    @Field(() => [FeedSourceNudgeUpsertWithWhereUniqueWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourceNudgeUpsertWithWhereUniqueWithoutSourceInput)
    upsert?: Array<FeedSourceNudgeUpsertWithWhereUniqueWithoutSourceInput>;

    @Field(() => FeedSourceNudgeCreateManySourceInputEnvelope, {nullable:true})
    @Type(() => FeedSourceNudgeCreateManySourceInputEnvelope)
    createMany?: FeedSourceNudgeCreateManySourceInputEnvelope;

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

    @Field(() => [FeedSourceNudgeUpdateWithWhereUniqueWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourceNudgeUpdateWithWhereUniqueWithoutSourceInput)
    update?: Array<FeedSourceNudgeUpdateWithWhereUniqueWithoutSourceInput>;

    @Field(() => [FeedSourceNudgeUpdateManyWithWhereWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourceNudgeUpdateManyWithWhereWithoutSourceInput)
    updateMany?: Array<FeedSourceNudgeUpdateManyWithWhereWithoutSourceInput>;

    @Field(() => [FeedSourceNudgeScalarWhereInput], {nullable:true})
    @Type(() => FeedSourceNudgeScalarWhereInput)
    deleteMany?: Array<FeedSourceNudgeScalarWhereInput>;
}
