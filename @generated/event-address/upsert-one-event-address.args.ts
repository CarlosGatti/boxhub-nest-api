import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventAddressWhereUniqueInput } from './event-address-where-unique.input';
import { Type } from 'class-transformer';
import { EventAddressCreateInput } from './event-address-create.input';
import { EventAddressUpdateInput } from './event-address-update.input';

@ArgsType()
export class UpsertOneEventAddressArgs {

    @Field(() => EventAddressWhereUniqueInput, {nullable:false})
    @Type(() => EventAddressWhereUniqueInput)
    where!: Prisma.AtLeast<EventAddressWhereUniqueInput, 'id'>;

    @Field(() => EventAddressCreateInput, {nullable:false})
    @Type(() => EventAddressCreateInput)
    create!: EventAddressCreateInput;

    @Field(() => EventAddressUpdateInput, {nullable:false})
    @Type(() => EventAddressUpdateInput)
    update!: EventAddressUpdateInput;
}
