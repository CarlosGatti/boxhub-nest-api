import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutEventTicketInput } from './user-update-without-event-ticket.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutEventTicketInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutEventTicketInput, {nullable:false})
    @Type(() => UserUpdateWithoutEventTicketInput)
    data!: UserUpdateWithoutEventTicketInput;
}
