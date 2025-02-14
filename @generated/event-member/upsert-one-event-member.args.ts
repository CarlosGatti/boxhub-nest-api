import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';
import { Type } from 'class-transformer';
import { EventMemberCreateInput } from './event-member-create.input';
import { EventMemberUpdateInput } from './event-member-update.input';

@ArgsType()
export class UpsertOneEventMemberArgs {

    @Field(() => EventMemberWhereUniqueInput, {nullable:false})
    @Type(() => EventMemberWhereUniqueInput)
    where!: Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>;

    @Field(() => EventMemberCreateInput, {nullable:false})
    @Type(() => EventMemberCreateInput)
    create!: EventMemberCreateInput;

    @Field(() => EventMemberUpdateInput, {nullable:false})
    @Type(() => EventMemberUpdateInput)
    update!: EventMemberUpdateInput;
}
