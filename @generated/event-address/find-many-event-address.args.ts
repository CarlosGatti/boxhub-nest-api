import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventAddressWhereInput } from './event-address-where.input';
import { Type } from 'class-transformer';
import { EventAddressOrderByWithRelationInput } from './event-address-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventAddressWhereUniqueInput } from './event-address-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventAddressScalarFieldEnum } from './event-address-scalar-field.enum';

@ArgsType()
export class FindManyEventAddressArgs {

    @Field(() => EventAddressWhereInput, {nullable:true})
    @Type(() => EventAddressWhereInput)
    where?: EventAddressWhereInput;

    @Field(() => [EventAddressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventAddressOrderByWithRelationInput>;

    @Field(() => EventAddressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventAddressWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EventAddressScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventAddressScalarFieldEnum>;
}
