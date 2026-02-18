import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalUpdateWithoutPinsInput } from './bucket-goal-update-without-pins.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateWithoutPinsInput } from './bucket-goal-create-without-pins.input';
import { BucketGoalWhereInput } from './bucket-goal-where.input';

@InputType()
export class BucketGoalUpsertWithoutPinsInput {

    @Field(() => BucketGoalUpdateWithoutPinsInput, {nullable:false})
    @Type(() => BucketGoalUpdateWithoutPinsInput)
    update!: BucketGoalUpdateWithoutPinsInput;

    @Field(() => BucketGoalCreateWithoutPinsInput, {nullable:false})
    @Type(() => BucketGoalCreateWithoutPinsInput)
    create!: BucketGoalCreateWithoutPinsInput;

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;
}
