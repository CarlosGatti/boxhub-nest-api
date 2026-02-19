import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BucketVisionBoardCount {

    @Field(() => Int, {nullable:false})
    sections?: number;

    @Field(() => Int, {nullable:false})
    items?: number;

    @Field(() => Int, {nullable:false})
    goalLinks?: number;

    @Field(() => Int, {nullable:false})
    checkins?: number;
}
