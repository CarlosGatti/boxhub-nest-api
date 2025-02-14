import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOnlineDetailWhereInput } from './event-online-detail-where.input';

@InputType()
export class EventOnlineDetailNullableRelationFilter {

    @Field(() => EventOnlineDetailWhereInput, {nullable:true})
    is?: EventOnlineDetailWhereInput;

    @Field(() => EventOnlineDetailWhereInput, {nullable:true})
    isNot?: EventOnlineDetailWhereInput;
}
