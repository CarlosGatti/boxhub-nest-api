import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventCreateWithoutUserInput } from './feed-event-create-without-user.input';
import { Type } from 'class-transformer';
import { FeedEventCreateOrConnectWithoutUserInput } from './feed-event-create-or-connect-without-user.input';
import { FeedEventUpsertWithWhereUniqueWithoutUserInput } from './feed-event-upsert-with-where-unique-without-user.input';
import { FeedEventCreateManyUserInputEnvelope } from './feed-event-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';
import { FeedEventUpdateWithWhereUniqueWithoutUserInput } from './feed-event-update-with-where-unique-without-user.input';
import { FeedEventUpdateManyWithWhereWithoutUserInput } from './feed-event-update-many-with-where-without-user.input';
import { FeedEventScalarWhereInput } from './feed-event-scalar-where.input';

@InputType()
export class FeedEventUpdateManyWithoutUserNestedInput {

    @Field(() => [FeedEventCreateWithoutUserInput], {nullable:true})
    @Type(() => FeedEventCreateWithoutUserInput)
    create?: Array<FeedEventCreateWithoutUserInput>;

    @Field(() => [FeedEventCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FeedEventCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FeedEventCreateOrConnectWithoutUserInput>;

    @Field(() => [FeedEventUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FeedEventUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<FeedEventUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => FeedEventCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FeedEventCreateManyUserInputEnvelope)
    createMany?: FeedEventCreateManyUserInputEnvelope;

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

    @Field(() => [FeedEventUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FeedEventUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<FeedEventUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [FeedEventUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => FeedEventUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<FeedEventUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [FeedEventScalarWhereInput], {nullable:true})
    @Type(() => FeedEventScalarWhereInput)
    deleteMany?: Array<FeedEventScalarWhereInput>;
}
