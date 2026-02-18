import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalLogCreateManyGoalInput } from './bucket-goal-log-create-many-goal.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketGoalLogCreateManyGoalInputEnvelope {

    @Field(() => [BucketGoalLogCreateManyGoalInput], {nullable:false})
    @Type(() => BucketGoalLogCreateManyGoalInput)
    data!: Array<BucketGoalLogCreateManyGoalInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
