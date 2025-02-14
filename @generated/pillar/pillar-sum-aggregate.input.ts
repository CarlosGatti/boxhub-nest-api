import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PillarSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
