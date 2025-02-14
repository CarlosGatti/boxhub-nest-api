import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOnlineDetailWhereUniqueInput } from './event-online-detail-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneEventOnlineDetailArgs {

    @Field(() => EventOnlineDetailWhereUniqueInput, {nullable:false})
    @Type(() => EventOnlineDetailWhereUniqueInput)
    where!: Prisma.AtLeast<EventOnlineDetailWhereUniqueInput, 'id'>;
}
