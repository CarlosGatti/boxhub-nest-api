import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutCommunityInput } from './event-create-without-community.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutCommunityInput } from './event-create-or-connect-without-community.input';
import { EventCreateManyCommunityInputEnvelope } from './event-create-many-community-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventUncheckedCreateNestedManyWithoutCommunityInput {

    @Field(() => [EventCreateWithoutCommunityInput], {nullable:true})
    @Type(() => EventCreateWithoutCommunityInput)
    create?: Array<EventCreateWithoutCommunityInput>;

    @Field(() => [EventCreateOrConnectWithoutCommunityInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutCommunityInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutCommunityInput>;

    @Field(() => EventCreateManyCommunityInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyCommunityInputEnvelope)
    createMany?: EventCreateManyCommunityInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
