import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventAddressSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
