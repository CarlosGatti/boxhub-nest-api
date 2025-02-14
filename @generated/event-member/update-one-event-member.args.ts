import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventMemberUpdateInput } from './event-member-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';

@ArgsType()
export class UpdateOneEventMemberArgs {

    @Field(() => EventMemberUpdateInput, {nullable:false})
    @Type(() => EventMemberUpdateInput)
    data!: EventMemberUpdateInput;

    @Field(() => EventMemberWhereUniqueInput, {nullable:false})
    @Type(() => EventMemberWhereUniqueInput)
    where!: Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>;
}
