import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventAddressCreateManyInput } from './event-address-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventAddressArgs {

    @Field(() => [EventAddressCreateManyInput], {nullable:false})
    @Type(() => EventAddressCreateManyInput)
    data!: Array<EventAddressCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
