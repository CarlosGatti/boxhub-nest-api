import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEventTicketInput } from './user-update-without-event-ticket.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEventTicketInput } from './user-create-without-event-ticket.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutEventTicketInput {

    @Field(() => UserUpdateWithoutEventTicketInput, {nullable:false})
    @Type(() => UserUpdateWithoutEventTicketInput)
    update!: UserUpdateWithoutEventTicketInput;

    @Field(() => UserCreateWithoutEventTicketInput, {nullable:false})
    @Type(() => UserCreateWithoutEventTicketInput)
    create!: UserCreateWithoutEventTicketInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
