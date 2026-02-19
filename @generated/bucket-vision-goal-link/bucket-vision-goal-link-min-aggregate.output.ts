import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BucketVisionGoalLinkMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    boardId?: number;

    @Field(() => Int, {nullable:true})
    goalId?: number;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
