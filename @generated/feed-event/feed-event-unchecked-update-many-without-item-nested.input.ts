import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventCreateWithoutItemInput } from './feed-event-create-without-item.input';
import { Type } from 'class-transformer';
import { FeedEventCreateOrConnectWithoutItemInput } from './feed-event-create-or-connect-without-item.input';
import { FeedEventUpsertWithWhereUniqueWithoutItemInput } from './feed-event-upsert-with-where-unique-without-item.input';
import { FeedEventCreateManyItemInputEnvelope } from './feed-event-create-many-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';
import { FeedEventUpdateWithWhereUniqueWithoutItemInput } from './feed-event-update-with-where-unique-without-item.input';
import { FeedEventUpdateManyWithWhereWithoutItemInput } from './feed-event-update-many-with-where-without-item.input';
import { FeedEventScalarWhereInput } from './feed-event-scalar-where.input';

@InputType()
export class FeedEventUncheckedUpdateManyWithoutItemNestedInput {

    @Field(() => [FeedEventCreateWithoutItemInput], {nullable:true})
    @Type(() => FeedEventCreateWithoutItemInput)
    create?: Array<FeedEventCreateWithoutItemInput>;

    @Field(() => [FeedEventCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => FeedEventCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<FeedEventCreateOrConnectWithoutItemInput>;

    @Field(() => [FeedEventUpsertWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => FeedEventUpsertWithWhereUniqueWithoutItemInput)
    upsert?: Array<FeedEventUpsertWithWhereUniqueWithoutItemInput>;

    @Field(() => FeedEventCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => FeedEventCreateManyItemInputEnvelope)
    createMany?: FeedEventCreateManyItemInputEnvelope;

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

    @Field(() => [FeedEventUpdateWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => FeedEventUpdateWithWhereUniqueWithoutItemInput)
    update?: Array<FeedEventUpdateWithWhereUniqueWithoutItemInput>;

    @Field(() => [FeedEventUpdateManyWithWhereWithoutItemInput], {nullable:true})
    @Type(() => FeedEventUpdateManyWithWhereWithoutItemInput)
    updateMany?: Array<FeedEventUpdateManyWithWhereWithoutItemInput>;

    @Field(() => [FeedEventScalarWhereInput], {nullable:true})
    @Type(() => FeedEventScalarWhereInput)
    deleteMany?: Array<FeedEventScalarWhereInput>;
}
