import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOnlineDetailWhereInput } from './event-online-detail-where.input';
import { Type } from 'class-transformer';
import { EventOnlineDetailOrderByWithRelationInput } from './event-online-detail-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventOnlineDetailWhereUniqueInput } from './event-online-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventOnlineDetailScalarFieldEnum } from './event-online-detail-scalar-field.enum';

@ArgsType()
export class FindManyEventOnlineDetailArgs {

    @Field(() => EventOnlineDetailWhereInput, {nullable:true})
    @Type(() => EventOnlineDetailWhereInput)
    where?: EventOnlineDetailWhereInput;

    @Field(() => [EventOnlineDetailOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventOnlineDetailOrderByWithRelationInput>;

    @Field(() => EventOnlineDetailWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventOnlineDetailWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EventOnlineDetailScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventOnlineDetailScalarFieldEnum>;
}
