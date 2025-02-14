import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOnlineDetailCreateInput } from './event-online-detail-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventOnlineDetailArgs {

    @Field(() => EventOnlineDetailCreateInput, {nullable:false})
    @Type(() => EventOnlineDetailCreateInput)
    data!: EventOnlineDetailCreateInput;
}
