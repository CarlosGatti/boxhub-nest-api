import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BucketGoalCount {

    @Field(() => Int, {nullable:false})
    logs?: number;

    @Field(() => Int, {nullable:false})
    pins?: number;

    @Field(() => Int, {nullable:false})
    media?: number;
}
