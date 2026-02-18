import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalPinCreateManyGoalInput } from './bucket-goal-pin-create-many-goal.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketGoalPinCreateManyGoalInputEnvelope {

    @Field(() => [BucketGoalPinCreateManyGoalInput], {nullable:false})
    @Type(() => BucketGoalPinCreateManyGoalInput)
    data!: Array<BucketGoalPinCreateManyGoalInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
