import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EventTicketCreateManyEventInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Boolean, {nullable:false})
    beeped!: boolean;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => String, {nullable:false})
    userEmail!: string;

    @Field(() => Date, {nullable:true})
    beepedTime?: Date | string;

    @Field(() => Boolean, {nullable:true})
    valid?: boolean;
}
