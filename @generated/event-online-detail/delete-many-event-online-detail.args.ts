import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOnlineDetailWhereInput } from './event-online-detail-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEventOnlineDetailArgs {

    @Field(() => EventOnlineDetailWhereInput, {nullable:true})
    @Type(() => EventOnlineDetailWhereInput)
    where?: EventOnlineDetailWhereInput;
}
