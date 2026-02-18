import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BucketPinSource } from '../prisma/bucket-pin-source.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketGoalCreateNestedOneWithoutPinsInput } from '../bucket-goal/bucket-goal-create-nested-one-without-pins.input';

@InputType()
export class BucketGoalPinCreateInput {

    @Field(() => Float, {nullable:false})
    lat!: number;

    @Field(() => Float, {nullable:false})
    lng!: number;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => BucketPinSource, {nullable:true})
    source?: keyof typeof BucketPinSource;

    @Field(() => String, {nullable:true})
    placeId?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    raw?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BucketGoalCreateNestedOneWithoutPinsInput, {nullable:false})
    goal!: BucketGoalCreateNestedOneWithoutPinsInput;
}
