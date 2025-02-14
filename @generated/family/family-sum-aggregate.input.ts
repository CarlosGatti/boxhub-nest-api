import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FamilySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
