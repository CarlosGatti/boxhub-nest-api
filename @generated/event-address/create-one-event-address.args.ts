import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventAddressCreateInput } from './event-address-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventAddressArgs {

    @Field(() => EventAddressCreateInput, {nullable:false})
    @Type(() => EventAddressCreateInput)
    data!: EventAddressCreateInput;
}
