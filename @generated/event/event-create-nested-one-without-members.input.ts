import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutMembersInput } from './event-create-without-members.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutMembersInput } from './event-create-or-connect-without-members.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutMembersInput {

    @Field(() => EventCreateWithoutMembersInput, {nullable:true})
    @Type(() => EventCreateWithoutMembersInput)
    create?: EventCreateWithoutMembersInput;

    @Field(() => EventCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutMembersInput)
    connectOrCreate?: EventCreateOrConnectWithoutMembersInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
