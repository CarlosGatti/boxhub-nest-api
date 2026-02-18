import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BucketGoalPinCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    goalId?: true;

    @Field(() => Boolean, {nullable:true})
    lat?: true;

    @Field(() => Boolean, {nullable:true})
    lng?: true;

    @Field(() => Boolean, {nullable:true})
    label?: true;

    @Field(() => Boolean, {nullable:true})
    source?: true;

    @Field(() => Boolean, {nullable:true})
    placeId?: true;

    @Field(() => Boolean, {nullable:true})
    address?: true;

    @Field(() => Boolean, {nullable:true})
    raw?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
