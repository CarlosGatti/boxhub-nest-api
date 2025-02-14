import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventAddressWhereUniqueInput } from './event-address-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueEventAddressArgs {

    @Field(() => EventAddressWhereUniqueInput, {nullable:false})
    @Type(() => EventAddressWhereUniqueInput)
    where!: Prisma.AtLeast<EventAddressWhereUniqueInput, 'id'>;
}
