import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventAddressUpdateInput } from './event-address-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EventAddressWhereUniqueInput } from './event-address-where-unique.input';

@ArgsType()
export class UpdateOneEventAddressArgs {

    @Field(() => EventAddressUpdateInput, {nullable:false})
    @Type(() => EventAddressUpdateInput)
    data!: EventAddressUpdateInput;

    @Field(() => EventAddressWhereUniqueInput, {nullable:false})
    @Type(() => EventAddressWhereUniqueInput)
    where!: Prisma.AtLeast<EventAddressWhereUniqueInput, 'id'>;
}
