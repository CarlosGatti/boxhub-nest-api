import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventAddressWhereInput } from './event-address-where.input';

@InputType()
export class EventAddressNullableRelationFilter {

    @Field(() => EventAddressWhereInput, {nullable:true})
    is?: EventAddressWhereInput;

    @Field(() => EventAddressWhereInput, {nullable:true})
    isNot?: EventAddressWhereInput;
}
