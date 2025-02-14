import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventTicketInput } from './user-create-without-event-ticket.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEventTicketInput } from './user-create-or-connect-without-event-ticket.input';
import { UserUpsertWithoutEventTicketInput } from './user-upsert-without-event-ticket.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutEventTicketInput } from './user-update-to-one-with-where-without-event-ticket.input';

@InputType()
export class UserUpdateOneRequiredWithoutEventTicketNestedInput {

    @Field(() => UserCreateWithoutEventTicketInput, {nullable:true})
    @Type(() => UserCreateWithoutEventTicketInput)
    create?: UserCreateWithoutEventTicketInput;

    @Field(() => UserCreateOrConnectWithoutEventTicketInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEventTicketInput)
    connectOrCreate?: UserCreateOrConnectWithoutEventTicketInput;

    @Field(() => UserUpsertWithoutEventTicketInput, {nullable:true})
    @Type(() => UserUpsertWithoutEventTicketInput)
    upsert?: UserUpsertWithoutEventTicketInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutEventTicketInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutEventTicketInput)
    update?: UserUpdateToOneWithWhereWithoutEventTicketInput;
}
