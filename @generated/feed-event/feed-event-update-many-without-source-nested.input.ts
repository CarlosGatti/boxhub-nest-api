import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventCreateWithoutSourceInput } from './feed-event-create-without-source.input';
import { Type } from 'class-transformer';
import { FeedEventCreateOrConnectWithoutSourceInput } from './feed-event-create-or-connect-without-source.input';
import { FeedEventUpsertWithWhereUniqueWithoutSourceInput } from './feed-event-upsert-with-where-unique-without-source.input';
import { FeedEventCreateManySourceInputEnvelope } from './feed-event-create-many-source-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';
import { FeedEventUpdateWithWhereUniqueWithoutSourceInput } from './feed-event-update-with-where-unique-without-source.input';
import { FeedEventUpdateManyWithWhereWithoutSourceInput } from './feed-event-update-many-with-where-without-source.input';
import { FeedEventScalarWhereInput } from './feed-event-scalar-where.input';

@InputType()
export class FeedEventUpdateManyWithoutSourceNestedInput {

    @Field(() => [FeedEventCreateWithoutSourceInput], {nullable:true})
    @Type(() => FeedEventCreateWithoutSourceInput)
    create?: Array<FeedEventCreateWithoutSourceInput>;

    @Field(() => [FeedEventCreateOrConnectWithoutSourceInput], {nullable:true})
    @Type(() => FeedEventCreateOrConnectWithoutSourceInput)
    connectOrCreate?: Array<FeedEventCreateOrConnectWithoutSourceInput>;

    @Field(() => [FeedEventUpsertWithWhereUniqueWithoutSourceInput], {nullable:true})
    @Type(() => FeedEventUpsertWithWhereUniqueWithoutSourceInput)
    upsert?: Array<FeedEventUpsertWithWhereUniqueWithoutSourceInput>;

    @Field(() => FeedEventCreateManySourceInputEnvelope, {nullable:true})
    @Type(() => FeedEventCreateManySourceInputEnvelope)
    createMany?: FeedEventCreateManySourceInputEnvelope;

    @Field(() => [FeedEventWhereUniqueInput], {nullable:true})
    @Type(() => FeedEventWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>>;

    @Field(() => [FeedEventWhereUniqueInput], {nullable:true})
    @Type(() => FeedEventWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>>;

    @Field(() => [FeedEventWhereUniqueInput], {nullable:true})
    @Type(() => FeedEventWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>>;

    @Field(() => [FeedEventWhereUniqueInput], {nullable:true})
    @Type(() => FeedEventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>>;

    @Field(() => [FeedEventUpdateWithWhereUniqueWithoutSourceInput], {nullable:true})
    @Type(() => FeedEventUpdateWithWhereUniqueWithoutSourceInput)
    update?: Array<FeedEventUpdateWithWhereUniqueWithoutSourceInput>;

    @Field(() => [FeedEventUpdateManyWithWhereWithoutSourceInput], {nullable:true})
    @Type(() => FeedEventUpdateManyWithWhereWithoutSourceInput)
    updateMany?: Array<FeedEventUpdateManyWithWhereWithoutSourceInput>;

    @Field(() => [FeedEventScalarWhereInput], {nullable:true})
    @Type(() => FeedEventScalarWhereInput)
    deleteMany?: Array<FeedEventScalarWhereInput>;
}
