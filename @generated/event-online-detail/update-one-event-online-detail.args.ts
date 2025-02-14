import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOnlineDetailUpdateInput } from './event-online-detail-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EventOnlineDetailWhereUniqueInput } from './event-online-detail-where-unique.input';

@ArgsType()
export class UpdateOneEventOnlineDetailArgs {

    @Field(() => EventOnlineDetailUpdateInput, {nullable:false})
    @Type(() => EventOnlineDetailUpdateInput)
    data!: EventOnlineDetailUpdateInput;

    @Field(() => EventOnlineDetailWhereUniqueInput, {nullable:false})
    @Type(() => EventOnlineDetailWhereUniqueInput)
    where!: Prisma.AtLeast<EventOnlineDetailWhereUniqueInput, 'id'>;
}
