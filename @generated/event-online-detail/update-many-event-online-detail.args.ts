import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOnlineDetailUpdateManyMutationInput } from './event-online-detail-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventOnlineDetailWhereInput } from './event-online-detail-where.input';

@ArgsType()
export class UpdateManyEventOnlineDetailArgs {

    @Field(() => EventOnlineDetailUpdateManyMutationInput, {nullable:false})
    @Type(() => EventOnlineDetailUpdateManyMutationInput)
    data!: EventOnlineDetailUpdateManyMutationInput;

    @Field(() => EventOnlineDetailWhereInput, {nullable:true})
    @Type(() => EventOnlineDetailWhereInput)
    where?: EventOnlineDetailWhereInput;
}
