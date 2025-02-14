import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEventTicketInput } from './user-create-without-event-ticket.input';

@InputType()
export class UserCreateOrConnectWithoutEventTicketInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutEventTicketInput, {nullable:false})
    @Type(() => UserCreateWithoutEventTicketInput)
    create!: UserCreateWithoutEventTicketInput;
}
