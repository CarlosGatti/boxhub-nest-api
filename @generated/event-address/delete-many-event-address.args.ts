import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventAddressWhereInput } from './event-address-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEventAddressArgs {

    @Field(() => EventAddressWhereInput, {nullable:true})
    @Type(() => EventAddressWhereInput)
    where?: EventAddressWhereInput;
}
