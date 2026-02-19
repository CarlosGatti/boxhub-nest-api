import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BucketVisionGoalLinkCreateManyGoalInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
