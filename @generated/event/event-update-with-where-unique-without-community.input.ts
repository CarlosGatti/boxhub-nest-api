import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutCommunityInput } from './event-update-without-community.input';

@InputType()
export class EventUpdateWithWhereUniqueWithoutCommunityInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateWithoutCommunityInput, {nullable:false})
    @Type(() => EventUpdateWithoutCommunityInput)
    data!: EventUpdateWithoutCommunityInput;
}
