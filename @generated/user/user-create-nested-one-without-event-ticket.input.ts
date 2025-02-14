import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventTicketInput } from './user-create-without-event-ticket.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEventTicketInput } from './user-create-or-connect-without-event-ticket.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEventTicketInput {

    @Field(() => UserCreateWithoutEventTicketInput, {nullable:true})
    @Type(() => UserCreateWithoutEventTicketInput)
    create?: UserCreateWithoutEventTicketInput;

    @Field(() => UserCreateOrConnectWithoutEventTicketInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEventTicketInput)
    connectOrCreate?: UserCreateOrConnectWithoutEventTicketInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
