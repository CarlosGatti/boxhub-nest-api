import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventOnlineDetailSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
