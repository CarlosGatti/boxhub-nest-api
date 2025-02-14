import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOnlineDetailCreateManyInput } from './event-online-detail-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventOnlineDetailArgs {

    @Field(() => [EventOnlineDetailCreateManyInput], {nullable:false})
    @Type(() => EventOnlineDetailCreateManyInput)
    data!: Array<EventOnlineDetailCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
