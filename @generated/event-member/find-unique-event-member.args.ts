import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueEventMemberArgs {

    @Field(() => EventMemberWhereUniqueInput, {nullable:false})
    @Type(() => EventMemberWhereUniqueInput)
    where!: Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>;
}
