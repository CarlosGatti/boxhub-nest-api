import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BucketGoalPinSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    goalId?: true;

    @Field(() => Boolean, {nullable:true})
    lat?: true;

    @Field(() => Boolean, {nullable:true})
    lng?: true;
}
