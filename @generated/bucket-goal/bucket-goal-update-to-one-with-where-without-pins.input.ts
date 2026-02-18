import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalWhereInput } from './bucket-goal-where.input';
import { Type } from 'class-transformer';
import { BucketGoalUpdateWithoutPinsInput } from './bucket-goal-update-without-pins.input';

@InputType()
export class BucketGoalUpdateToOneWithWhereWithoutPinsInput {

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;

    @Field(() => BucketGoalUpdateWithoutPinsInput, {nullable:false})
    @Type(() => BucketGoalUpdateWithoutPinsInput)
    data!: BucketGoalUpdateWithoutPinsInput;
}
