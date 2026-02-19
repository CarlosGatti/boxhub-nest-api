import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketGoalType } from '../prisma/bucket-goal-type.enum';
import { BucketGoalStatus } from '../prisma/bucket-goal-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketGoalCreatetagsInput } from './bucket-goal-createtags.input';
import { BucketGoalLogUncheckedCreateNestedManyWithoutGoalInput } from '../bucket-goal-log/bucket-goal-log-unchecked-create-nested-many-without-goal.input';
import { BucketGoalPinUncheckedCreateNestedManyWithoutGoalInput } from '../bucket-goal-pin/bucket-goal-pin-unchecked-create-nested-many-without-goal.input';
import { BucketGoalMediaUncheckedCreateNestedManyWithoutGoalInput } from '../bucket-goal-media/bucket-goal-media-unchecked-create-nested-many-without-goal.input';
import { BucketVisionGoalLinkUncheckedCreateNestedManyWithoutGoalInput } from '../bucket-vision-goal-link/bucket-vision-goal-link-unchecked-create-nested-many-without-goal.input';

@InputType()
export class BucketGoalUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => BucketGoalType, {nullable:true})
    type?: keyof typeof BucketGoalType;

    @Field(() => BucketGoalStatus, {nullable:true})
    status?: keyof typeof BucketGoalStatus;

    @Field(() => Int, {nullable:true})
    priority?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    details?: any;

    @Field(() => Int, {nullable:true})
    detailsSchemaVersion?: number;

    @Field(() => String, {nullable:true})
    coverUrl?: string;

    @Field(() => BucketGoalCreatetagsInput, {nullable:true})
    tags?: BucketGoalCreatetagsInput;

    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BucketGoalLogUncheckedCreateNestedManyWithoutGoalInput, {nullable:true})
    logs?: BucketGoalLogUncheckedCreateNestedManyWithoutGoalInput;

    @Field(() => BucketGoalPinUncheckedCreateNestedManyWithoutGoalInput, {nullable:true})
    pins?: BucketGoalPinUncheckedCreateNestedManyWithoutGoalInput;

    @Field(() => BucketGoalMediaUncheckedCreateNestedManyWithoutGoalInput, {nullable:true})
    media?: BucketGoalMediaUncheckedCreateNestedManyWithoutGoalInput;

    @Field(() => BucketVisionGoalLinkUncheckedCreateNestedManyWithoutGoalInput, {nullable:true})
    bucketVisionGoalLinks?: BucketVisionGoalLinkUncheckedCreateNestedManyWithoutGoalInput;
}
