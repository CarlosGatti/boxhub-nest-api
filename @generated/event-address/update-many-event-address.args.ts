import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventAddressUpdateManyMutationInput } from './event-address-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventAddressWhereInput } from './event-address-where.input';

@ArgsType()
export class UpdateManyEventAddressArgs {

    @Field(() => EventAddressUpdateManyMutationInput, {nullable:false})
    @Type(() => EventAddressUpdateManyMutationInput)
    data!: EventAddressUpdateManyMutationInput;

    @Field(() => EventAddressWhereInput, {nullable:true})
    @Type(() => EventAddressWhereInput)
    where?: EventAddressWhereInput;
}
