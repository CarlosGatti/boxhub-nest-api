import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AppAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
