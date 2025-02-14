import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateNestedManyWithoutAddressInput } from '../event/event-create-nested-many-without-address.input';

@InputType()
export class EventAddressCreateInput {

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    zipCode!: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EventCreateNestedManyWithoutAddressInput, {nullable:true})
    event?: EventCreateNestedManyWithoutAddressInput;
}
