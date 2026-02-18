import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BucketGoalPinAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    goalId?: number;

    @Field(() => Float, {nullable:true})
    lat?: number;

    @Field(() => Float, {nullable:true})
    lng?: number;
}
