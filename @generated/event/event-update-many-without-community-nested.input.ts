import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutCommunityInput } from './event-create-without-community.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutCommunityInput } from './event-create-or-connect-without-community.input';
import { EventUpsertWithWhereUniqueWithoutCommunityInput } from './event-upsert-with-where-unique-without-community.input';
import { EventCreateManyCommunityInputEnvelope } from './event-create-many-community-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithWhereUniqueWithoutCommunityInput } from './event-update-with-where-unique-without-community.input';
import { EventUpdateManyWithWhereWithoutCommunityInput } from './event-update-many-with-where-without-community.input';
import { EventScalarWhereInput } from './event-scalar-where.input';

@InputType()
export class EventUpdateManyWithoutCommunityNestedInput {

    @Field(() => [EventCreateWithoutCommunityInput], {nullable:true})
    @Type(() => EventCreateWithoutCommunityInput)
    create?: Array<EventCreateWithoutCommunityInput>;

    @Field(() => [EventCreateOrConnectWithoutCommunityInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutCommunityInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutCommunityInput>;

    @Field(() => [EventUpsertWithWhereUniqueWithoutCommunityInput], {nullable:true})
    @Type(() => EventUpsertWithWhereUniqueWithoutCommunityInput)
    upsert?: Array<EventUpsertWithWhereUniqueWithoutCommunityInput>;

    @Field(() => EventCreateManyCommunityInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyCommunityInputEnvelope)
    createMany?: EventCreateManyCommunityInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventUpdateWithWhereUniqueWithoutCommunityInput], {nullable:true})
    @Type(() => EventUpdateWithWhereUniqueWithoutCommunityInput)
    update?: Array<EventUpdateWithWhereUniqueWithoutCommunityInput>;

    @Field(() => [EventUpdateManyWithWhereWithoutCommunityInput], {nullable:true})
    @Type(() => EventUpdateManyWithWhereWithoutCommunityInput)
    updateMany?: Array<EventUpdateManyWithWhereWithoutCommunityInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    @Type(() => EventScalarWhereInput)
    deleteMany?: Array<EventScalarWhereInput>;
}
