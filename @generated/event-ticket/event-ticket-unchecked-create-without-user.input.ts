import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EventTicketUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Boolean, {nullable:false})
    beeped!: boolean;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Date, {nullable:true})
    beepedTime?: Date | string;

    @Field(() => Boolean, {nullable:true})
    valid?: boolean;
}
