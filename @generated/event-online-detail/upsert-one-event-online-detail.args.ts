import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOnlineDetailWhereUniqueInput } from './event-online-detail-where-unique.input';
import { Type } from 'class-transformer';
import { EventOnlineDetailCreateInput } from './event-online-detail-create.input';
import { EventOnlineDetailUpdateInput } from './event-online-detail-update.input';

@ArgsType()
export class UpsertOneEventOnlineDetailArgs {

    @Field(() => EventOnlineDetailWhereUniqueInput, {nullable:false})
    @Type(() => EventOnlineDetailWhereUniqueInput)
    where!: Prisma.AtLeast<EventOnlineDetailWhereUniqueInput, 'id'>;

    @Field(() => EventOnlineDetailCreateInput, {nullable:false})
    @Type(() => EventOnlineDetailCreateInput)
    create!: EventOnlineDetailCreateInput;

    @Field(() => EventOnlineDetailUpdateInput, {nullable:false})
    @Type(() => EventOnlineDetailUpdateInput)
    update!: EventOnlineDetailUpdateInput;
}
