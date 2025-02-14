import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventMemberWhereInput } from './event-member-where.input';
import { Type } from 'class-transformer';
import { EventMemberOrderByWithRelationInput } from './event-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventMemberScalarFieldEnum } from './event-member-scalar-field.enum';

@ArgsType()
export class FindFirstEventMemberArgs {

    @Field(() => EventMemberWhereInput, {nullable:true})
    @Type(() => EventMemberWhereInput)
    where?: EventMemberWhereInput;

    @Field(() => [EventMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventMemberOrderByWithRelationInput>;

    @Field(() => EventMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EventMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventMemberScalarFieldEnum>;
}
